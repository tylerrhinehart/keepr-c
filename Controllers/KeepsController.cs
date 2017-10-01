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
    public class KeepsController : Controller
    {
        public KeeprContext _db { get; private set; }

        public KeepsController(KeeprContext db)
        {
            _db = db;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return _db.Keeps;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Keep Get(int id)
        {
            return _db.Keeps.Find(id);
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody]Keep keep)
        {
            _db.Keeps.Add(keep);
            _db.SaveChanges();
            return "Keep Created";
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
            Keep keep = _db.Keeps.Find(id);
            _db.Keeps.Remove(keep);
            _db.SaveChanges();
            return "successfully removed keep";
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