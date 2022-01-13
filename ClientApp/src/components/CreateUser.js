import React from "react";

const CreateUser = ({ onChangeForm, create }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Add post</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputI">Username</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="userName"
                  id="userName"
                  placeholder="UserName"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputPost">Post</label>
                <input
                  type="text"
                  onChange={(e) => console.log(onChangeForm(e))}
                  className="form-control"
                  name="post"
                  id="post"
                  // aria-describedby="emailHelp"
                  placeholder="Post"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => create()}
              className="btn btn-danger">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
