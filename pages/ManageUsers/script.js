async function getUser() {
  try {
    const response = await axios
      .get("https://reqres.in/api/users?page=2")
      .then(resp => resp.data.data);
    response.map(user => {
      const { id, first_name, last_name, email, avatar } = user;
      const userRow = document.createElement("tr");
      userRow.innerHTML = `
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td><img src="${avatar}" alt="${first_name} ${last_name}" /></td>
        <td><button class="btn btn-danger btn-sm">Delete</button></td>
      `;
      document.body.appendChild(userRow);
    });
  } catch (err) {
    console.log(err);
  }
}
getUser();
