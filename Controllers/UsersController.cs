using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ASP.NETCoreWebApplication.Dtos;
using ASP.NETCoreWebApplication.Models;
using ASP.NETCoreWebApplication.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserModel>> getUserPost(int id)
        {
            var user = await _userRepository.Get(id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUserPosts()
        {
            var users = await _userRepository.GetAll();
            return Ok(users);
        }

        [HttpPost]
        public async Task<ActionResult> CreateUserPost(CreatePostDto createPostDto)
        {
            var users = new UserModel
            {
                firstName = createPostDto.FirstName,
                userName = createPostDto.UserName,
                post = createPostDto.Post,
                //CreatedOn = DateTime.Now
            };

            await _userRepository.Add(users);
            return Ok();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteUser(int id)
        {
            await _userRepository.Delete(id);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(int id, UpdatePostDto updatePostDto)
        {
            var user = new UserModel
            {
                Id = id,
                firstName = updatePostDto.FirstName,
                userName = updatePostDto.UserName,
                post = updatePostDto.Post,
                updatedOn = DateTime.Now,
            };

            await _userRepository.Update(user);
            return Ok();

        }
    }
}

