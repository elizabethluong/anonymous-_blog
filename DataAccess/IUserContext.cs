using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Models
{
    public interface IUserContext
    {

        DbSet<UserModel> Users { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);

    }
}