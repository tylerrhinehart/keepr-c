using System;
using System.ComponentModel.DataAnnotations;

namespace keepr
{
    public interface IBasicTemplate
    {
        int Id { get; set; }
        string Title { get; set; }
        string Description { get; set; }
        string ImgUrl { get; set; }

        [Required]
        string UserId { get; set; }
    }
}