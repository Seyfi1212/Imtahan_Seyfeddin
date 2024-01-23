let form = document.querySelector("form");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let price = document.querySelector("#price");
let table = document.querySelector("table");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector("#closeBtn");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
     
    const inputs = [name, desc, price];

    if(name.value.trim() && desc.value.trim() && price.value.trim()){
        let obj = {
            name: name.value,
            desc: desc.value,
            price: price.value
        }
        axios.post("http://localhost:3000/Pulse", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }else{
        inputs.forEach(input => {
            
    
        let currentDisplay = input.value.trim() == "" ? 'block' : 'none'
        input.previousElementSibling.style.display = currentDisplay;
        })
    }



})



closeBtn.addEventListener("click", ()=> {
    modal.style.display = "";
    modal.style.position = "";
})

fetch("http://localhost:3000/Pulse")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.desc}</td>
                <td>${element.price}</td>
                <td>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </td>
                <td>
                    <button onclick="updateEl(${element.id})">Update</button>
                </td>
            </tr>
        `
    })
})

function deleteEl(id) {
    axios.delete(`http://localhost:3000/Pulse/${id}`);
    window.location.reload();
}

function updateEl(id) {
    window.location = `./update.html?id=${id}`
}