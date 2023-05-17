using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class NewsDb
    {
        public int Id { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public string? link { get; set; }
        public string? image_url { get; set; }
        public string? pubDate { get; set; }
        public string? userId { get; set; }
    }
}