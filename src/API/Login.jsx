export const Login = (email, password) => {
  fetch("https://sebastian-expenses-backend.herokuapp.com/api/expense/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: email,
      password: password,
    },
  });
};
