const Header = () => {
  const header = document.createElement("header");
  header.innerHTML = `
  <header class="header">
    <img src="/assets/logo-uppersoft.png" alt="uppersoft" title="UpperSoft" class="logo">
  </header>
  `;
  return header;
};

document.body.appendChild(Header());

function cadastro(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;

  if (email === "" || password === "" || passwordConfirm === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (password.length < 6) {
    alert("A senha deve ter no mínimo 6 caracteres!");
    return;
  }

  if (password !== passwordConfirm) {
    alert("As senhas não conferem!");
    return;
  }

  const localStorageUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = {
    name: name,
    email: email,
    password: password
  };

  if (localStorageUsers.some(user => user.email === email)) {
    alert("Email já cadastrado!");
    return;
  }

  localStorageUsers.push(user);

  localStorage.setItem("users", JSON.stringify(localStorageUsers));
  alert("Cadastro realizado com sucesso!");
  window.location.href = `${window.location.origin}/pages/Login/`;
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const localStorageUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = localStorageUsers.find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    alert("Email ou Senha incorretos!");
    return;
  }

  alert("Login realizado com sucesso!");
  window.location.href = `${window.location.origin}/pages/ManageUsers/`;
}
