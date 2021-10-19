const login = document.querySelector(".login");
const control = document.querySelector(".control");

const usersStorage = JSON.parse(localStorage.getItem("userName"));
let usersData = usersStorage ? usersStorage : [];

// helper function to add data to local storage
function handleLocalStorage(name) {
  if (!name.length < 1) {
    usersData.push(name);
    localStorage.setItem("userName", JSON.stringify(usersData));
    alert("Welcome");
  }
}

// adding new user to localstorage
function handleAddUser() {
  // enter user name
  const userName = prompt("Please Enter Your Name");
  handleLocalStorage(userName);
}

// check if the user name is exist or not, if not => adding it to local storage
function handleControlUser() {
  const userName = prompt("Please Enter Your Name");

  if (userName.length < 1) {
    return alert("Please write a name");
  }

  const oldUser = usersData.some((user) => user === userName);

  if (oldUser) {
    alert("Exist User !!!!!");
  }

  if (!oldUser) {
    handleLocalStorage(userName);
  }
}

login.addEventListener("click", handleAddUser);
control.addEventListener("click", handleControlUser);
