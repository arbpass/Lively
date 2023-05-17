using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Contacts;
using Domain.Models;
using Infrastructure.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
//using Lively.Models;

namespace Lively.Controllers
{
    [Authorize]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly INewsRepo _newsRepo;
        private readonly ApplicationDbContext _appDbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public HomeController(INewsRepo newsRepo, ApplicationDbContext appDbContext, UserManager<IdentityUser> userManager)
        {
            _newsRepo = newsRepo;
            _appDbContext = appDbContext;
            _userManager = userManager;
        }

        [HttpGet("Home")]
        public async Task<IActionResult> GetData()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var newsList = _appDbContext.News.Where(x => x.userId == user.Id);
            return Ok(newsList);
        }

        [HttpPost("Home")]
        public async Task<IActionResult> SaveNews([FromBody]NewsDb data)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            NewsDb temp = new NewsDb();
            temp.title = data.title;
            temp.description = data.description;
            temp.link = data.link;
            temp.image_url = data.image_url;
            temp.pubDate = data.pubDate;
            temp.userId = user.Id;

            _appDbContext.News.Add(temp);
            _appDbContext.SaveChanges();
            
            return Ok(temp);
        }


        [HttpDelete("Home/{title}")]
        public async Task<IActionResult> DeleteNews(string title)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            var userNews = _appDbContext.News.Where(x=> x.userId == user.Id);
            var newsToBeDeleted = userNews.SingleOrDefault(x=> x.title == title);

            _appDbContext.News.Remove(newsToBeDeleted);
            _appDbContext.SaveChanges();
            
            return Ok();
        }
    }
}