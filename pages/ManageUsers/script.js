const userContainer = document.querySelector(".user__container");
const container = document.querySelector(".container");

async function getUser() {
  try {
    const response = await axios
      .get("https://reqres.in/api/users?page=1")
      .then(resp => resp.data);
    response.data.map(user => {
      const { first_name, last_name, email, avatar } = user;
      const userCard = document.createElement("div");
      userCard.classList.add("user__card");
      userCard.innerHTML = `
        <img src="${avatar}" alt="user avatar" class="avatar"/>
        <strong class="user__name">${first_name} ${last_name}</strong>
        <span class="user__mail">${email}</span>
        <button class="user__btn"><img src="../../assets/Icons/edit-icon.png" /></button>
      `;
      userContainer.appendChild(userCard);
    });
    const view = document.createElement("div");
    view.classList.add("view");
    view.innerHTML = `
      <span>mostrando ${response.per_page} de ${response.total}</span>
    `;
    container.appendChild(view);
  } catch (err) {
    console.log(err);
  }
}
getUser();
