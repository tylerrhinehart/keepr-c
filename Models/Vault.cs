using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Vault : IBasicTemplate
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }

        [Required]
        public string UserId { get; set; }
        public List<Keep> VaultKeeps { get; set; } = new List<Keep>();
    }
}