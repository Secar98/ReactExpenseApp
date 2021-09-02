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
  fetch("https://sebastian-expenses-backend.herokuapp.com/api/expense/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
};

module.exports = {
  RemoveExpense,
  AddExpense,
};
