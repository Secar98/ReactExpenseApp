const RemoveExpense = (body, token) => {
  fetch("https://sebastian-expenses-backend.herokuapp.com/api/expense/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
};

const AddExpense = (body, token) => {
  return fetch(
    "https://sebastian-expenses-backend.herokuapp.com/api/expense/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.msg;
    });
};

module.exports = {
  RemoveExpense,
  AddExpense,
};
