using System;
using System.Collections.Generic;

namespace ASP.NETCoreWebApplication.Models
{
        public class UserModel
        {
        public int Id { get; set; }
        
        public string firstName { get; set; }

        public string userName { get; set; }

        public string post { get; set; }
        
        public DateTime updatedOn { get; set; }
        
        public DateTime createdOn { get; set; }
        }
    }
    