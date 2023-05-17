using Domain.Contacts;
using Domain.Models;
using Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repository
{
    public class NewsRepo: INewsRepo
    {
        private readonly ApplicationDbContext _appDbContext;

        public NewsRepo(ApplicationDbContext appDbContext) //accessing to appDbContext
        {
            _appDbContext = appDbContext;
        }

        public IEnumerable<NewsDb> AllNews
        {
            get
            {
                return _appDbContext.News;
            }
        }
    }
}