export function loginUser(credentials) {
  console.log("credentials ** ::", credentials);
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      res.json();
    })
    .then((user) => {
      console.log("res111::::", user);
      return user;
    })
    .catch((error) => {
      console.log("error111::::", error);
    });
}

export function registerUser(user) {
  console.log("user here :::", user);
  return fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log("err::", err);
    });
}
