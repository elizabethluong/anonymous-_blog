using System.Collections.Generic;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Models;

namespace ASP.NETCoreWebApplication.Repositories
{
    public interface IUserRepository
    {
        Task<UserModel> Get(int id);

        Task<IEnumerable<UserModel>> GetAll();

        Task Add(UserModel user);

        Task Delete(int id);

        Task Update(UserModel user);
    }
}