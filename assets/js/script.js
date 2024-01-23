
let pulse = document.querySelector(".egg");
let search =  document.querySelector("input[type=search]");
let arr_1 = [];
let arr_2 = [];

function getAllData() {
    fetch("http://localhost:3000/Pulse")
    .then(res => res.json())
    .then(data => {
        arr_2 = data;
        pulse.innerHTML = "";
        arr_1 = arr_1.length || search.value ? arr_1 : data;
        arr_1.forEach(element => {
            pulse.innerHTML += `
                <div class="soft">
                    <div class="ham">
                        <h3>${element.name}</h3>
                        <p>${element.desc}</p>
                    </div>
                    <div class="div">
                        <button onclick="viewDetails(${element.id})">View Details</button>
                    </div>
                    <div class="price">
                        <span>$${element.price}</span>
                    </div>
                </div>
            `
        })
    })
}

getAllData();

search.addEventListener("input", (e)=> {
    arr_1 = arr_2;
    arr_1 = arr_1.filter((el)=> {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    });
    getAllData();
})

let sort = document.querySelector("#sort");

sort.addEventListener("change", (e)=> {
    if(e.target.value == "asc"){
        arr_1 = arr_1.sort((a,b)=> a.price - b.price);
    }
    else if(e.target.value == "dsc"){
        arr_1 = arr_1.sort((a,b)=> b.price - a.price);
    }
    else{
        arr_1 = []
    };
    getAllData();
})

function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}

let nav = document.querySelector("nav");
let list = document.querySelector("#list");

list.addEventListener("click", ()=> {
    
})