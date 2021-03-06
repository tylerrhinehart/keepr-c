using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class VaultsController : Controller
    {
        public KeeprContext _db { get; private set; }

        public VaultsController(KeeprContext db)
        {
            _db = db;
        }

        // GET api/values


        // GET api/values/5
        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            return _db.Vaults.Find(id);
        }

        [HttpGet("{userId}/uservaults")]
        public IEnumerable<Vault> GetUserVaults(string userId)
        {
            return _db.Vaults.Where(v => v.UserId == userId);
        }

        [HttpGet("{userId}/uservaults/{vaultId}")]
        public IEnumerable<Keep> GetVaultKeeps(string userId, int vaultId)
        {
            // return _db.Vaults.Single(v => v.Id == vaultId).VaultKeeps;
            return _db.Vaults.Find(vaultId).VaultKeeps;
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody]Vault vault)
        {
            _db.Vaults.Add(vault);
            _db.SaveChanges();
            return "Vault Created";
        }

        // Add keep to vault
        [HttpPost("{vaultId}/addkeep/{keepId}")]
        public IEnumerable<Keep> AddKeep(int vaultId, int keepId)
        {
            // var keep = _db.Keeps.Single(k => k.Id == keepId);
            // var vault = _db.Vaults.Single(v => v.Id == vaultId);
            var keep = _db.Keeps.Find(keepId);
            var vault = _db.Vaults.Find(vaultId);
            if (keep != null && vault != null)
            {
                // _db.Vaults.Find(vault).VaultKeeps.Add(keep);
                vault.VaultKeeps.Add(_db.Keeps.Find(keepId));
                _db.SaveChanges();
                return _db.Vaults.Single(v => v.Id == vaultId).VaultKeeps;
            }
            return _db.Vaults.Single(v => v.Id == vaultId).VaultKeeps;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            Vault vault = _db.Vaults.Find(id);
            _db.Vaults.Remove(vault);
            _db.SaveChanges();
            return "successfully removed vault";
        }

        // [HttpGet("/api/students/{studentId}/courses")]
        // public Student GetCourses(int studentId)
        // {
        //     return _db.Students.Include(s => s.Courses).FirstOrDefault(s => s.Id == studentId);
        // }

        // [HttpPost("/api/students/{studentId}/courses/{courseId}/join")]
        // public string JoinCourse(int studentId, int courseId)
        // {
        //     var course = _db.Courses.Find(courseId);
        //     var student = _db.Students.Find(studentId);
        //     if (student != null && course != null)
        //     {
        //         student.Courses.Add(course);
        //         _db.SaveChanges();
        //         return "Success";
        //     }
        //     return "NO WAY JOSE";
        // }


    }
}