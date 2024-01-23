let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/Pulse/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML += `
        <div class="soft">
            <div class="ham">
                <h3>${data.name}</h3>
                <p>${data.desc}</p>
            </div>
            <div class="div"></div>
            <div class="price">
                <span>$${data.price}</span>
            </div>
        </div>
`
})