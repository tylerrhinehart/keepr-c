using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using keepr.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

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
                        { "id", user.Id },
                        { "email", user.Email },
                        { "username", user.UserName },
                        { "profileImgUrl", user.ProfileImgUrl }
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
                        { "id", user.Id },
                        { "email", user.Email },
                        { "username", user.UserName },
                        { "profileImgUrl", user.ProfileImgUrl }
                    });
                }
                return new JsonResult("Invalid login") { StatusCode = 401 };
            }

            return Error("Unexpected Error");
        }

        [HttpDelete("logout")]
        public async Task<string> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return "Successfully Logged out";
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
    }
}