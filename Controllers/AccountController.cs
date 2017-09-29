using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using keepr.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System;
using JWT;
using JWT.Algorithms;
using JWT.Serializers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]Credentials credentials)
        {
            if (ModelState.IsValid)
            {
                var user = new User { UserName = credentials.Email, Email = credentials.Email };
                var result = await _userManager.CreateAsync(user, credentials.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(credentials.Email) },
                        { "id_token", getIdToken(user) }
                    });
                }
            }

            return Error("Unexpected Error");
        }

        [HttpPost("login")]
        public async Task<IActionResult> SignIn([FromBody]Credentials credentials)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(credentials.Email, credentials.Password, false, false);
                if (result.Succeeded)
                {
                    var user = await _userManager.FindByEmailAsync(credentials.Email);
                    return new JsonResult(new Dictionary<string, object>
                    {
                        { "access_token", GetAccessToken(credentials.Email) },
                        { "id_tokent", getIdToken(user) }
                    });
                }
                return new JsonResult("Invalid login") { StatusCode = 401 };
            }

            return Error("Unexpected Error");
        }

        [HttpDelete("logout")]
        public async Task<string> Logout()
        {
            await HttpContext.SignOutAsync(JwtBearerDefaults.AuthenticationScheme);
            return "Successfully Logged out";
        }

        private string getIdToken(User user)
        {
            var payload = new Dictionary<string, object>
            {
                { "id", user.Id },
                { "sub", user.Email },
                { "email", user.Email },
                { "emailConfirmed", user.EmailConfirmed },
            };
            return GetToken(payload);
        }

        private string GetAccessToken(string email)
        {
            var payload = new Dictionary<string, object>
            {
                { "sub", email },
                { "email", email }
            };
            return GetToken(payload);
        }

        private string GetToken(Dictionary<string, object> payload)
        {
            var secret = "hello-cat";

            payload.Add("iss", "keepr");
            payload.Add("aud", "keeprApi");
            payload.Add("nbf", ConvertToUnixTimestamp(DateTime.Now));
            payload.Add("iat", ConvertToUnixTimestamp(DateTime.Now));
            payload.Add("exp", ConvertToUnixTimestamp(DateTime.Now.AddDays(7)));
            IJwtAlgorithm algorithm = new HMACSHA256Algorithm();
            IJsonSerializer serializer = new JsonNetSerializer();
            IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
            IJwtEncoder encoder = new JwtEncoder(algorithm, serializer, urlEncoder);

            return encoder.Encode(payload, secret);
        }


        private JsonResult Errors(IdentityResult result)
        {
            var items = result.Errors.Select(x => x.Description).ToArray();
            return new JsonResult(items) { StatusCode = 400 };

        }

        private JsonResult Error(string message)
        {
            return new JsonResult(message) { StatusCode = 400 };
        }

        private static double ConvertToUnixTimestamp(DateTime dateTime)
        {
            var origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            TimeSpan diff = dateTime.ToUniversalTime() - origin;
            return Math.Floor(diff.TotalSeconds);
        }
    }
}