let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("form");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let price = document.querySelector("#price");

fetch(`http://localhost:3000/Pulse/${id}`)
.then(res => res.json())
.then(data => {
    name.value = data.name;
    desc.value = data.desc;
    price.value = data.price;
})

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    let obj = {
        name: name.value,
        desc: desc.value,
        price: price.value
    }
    axios.patch(`http://localhost:3000/Pulse/${id}`, obj)
    .then(res => {
        window.location = "./index.html"
    })
})