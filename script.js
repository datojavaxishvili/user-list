const url = "https://randomuser.me/api?results=50";
const list = document.querySelector("#list");
const input = document.querySelector("input");
const listUsers = [];

async function fetchUsers() {
  const res = await fetch(url);
  const { results: data } = await res.json();
  list.innerHTML = "";

  data.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${user.picture.thumbnail}" alt="${user.name.first}" />
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>`;
    listUsers.push(li);
    list.append(li);
  });
}

function filterUsers(searchTerm) {
  listUsers.forEach((user) => {
    if (user.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}

input.addEventListener("input", () => {
  filterUsers(input.value);
});

fetchUsers();
