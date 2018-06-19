﻿using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentApp.Persistance.Repository
{
    public interface IAppUserRepository : IRepository<AppUser, int>
    {
       // AppUser GetActiveUser(string username);
        //AppUser GetActiveUser(string username);
        int GetActiveUserId(string username);
    }
}
