function loadInitialData() {
  var users = [
    {
      id: 1,
      name: "Sabin Regmi",
      email: "get2sabin@gmail.com",
      password: "123456",
      type: "user",
    },
    {
      id: 2,
      name: "Admin",
      email: "admin@admin.com",
      password: "admin",
      type: "admin",
    },
    {
      id: 3,
      name: "Namrata Barot",
      email: "namrata@gmail.com",
      password: "123456",
      type: "user",
    },
    {
      id: 4,
      name: "Olllaliuuuwaa",
      email: "sayo@gmail.com",
      password: "123456",
      type: "user",
    },
    {
      id: 3,
      name: "Devanshi Gandhi",
      email: "devanshi@gmail.com",
      password: "123456",
      type: "user",
    },
  ];
  // saving to local storage
  localStorage.setItem("users", JSON.stringify(users));
}

function checkIfUserExists() {
  if (localStorage.getItem("users") === null) {
    loadInitialData();
  }
}

function validateUser(email, password) {
  var users = JSON.parse(localStorage.getItem("users"));

  var user = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    // localStorage.setItem("projects", JSON.stringify([]));

    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password");
  }
}

function getCurrentUser() {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser;
}
