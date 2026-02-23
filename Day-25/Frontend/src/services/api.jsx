const BASE_URL = import.meta.env.VITE_API_URL;

const getHeader = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok){
    const message = data.message || `Request Failed with status ${res.status}`;
    throw new Error(message);
  } 
  return data;
};

//Signup Form
export const SignupUser = async (username, email, password) => {
  const res = await fetch(`${BASE_URL}/auth/signup`,{
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify({username, email, password})
  });
  return handleResponse(res);
};

// Login Form
export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
};

// Fetch Users
export const fetchUser = async () => {
  const res = await fetch(`${BASE_URL}/users`, {
    headers: getHeader(),
  });
  return handleResponse(res);
};

// UserDashboard
export const createUser = async (data) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: getHeader(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const updateUser = async (id, data) => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: getHeader(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const deleteUser = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: getHeader(),
  });
  return handleResponse(res);
};
