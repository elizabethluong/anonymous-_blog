using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IUserContext _context;
        public UserRepository(IUserContext context) 
        {
            _context = context;
        }
        public async Task Add(UserModel user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var itemToDelete = await _context.Users.FindAsync(id);
            if (itemToDelete == null)
            {
                throw new NullReferenceException();

                _context.Users.Remove(itemToDelete);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<UserModel> Get(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<IEnumerable<UserModel>> GetAll()
        {
            return await _context.Users.ToListAsync();

        }

        public async Task Update(UserModel user)
        {
            var itemToUpdate = await _context.Users.FindAsync(user.Id);
            if(itemToUpdate == null)
                throw new NullReferenceException();

            itemToUpdate.post = user.post;
            await _context.SaveChangesAsync();
        }
    }
}