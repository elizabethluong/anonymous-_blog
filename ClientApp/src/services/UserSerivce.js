export const getAllUserPosts = async () => {
  const response = await fetch("api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
  });
  console.log(response)
  return await response.json();
}

export const createUserPost = async (data) => {
  const response = await fetch(`api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.text();
}

export const deleteUserPost = async (data) => {
  const response = await fetch(`/users/${data.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "Accept": "application/json"
 },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export const editUser = async (data) => {
  const response = await fetch(`/users/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}