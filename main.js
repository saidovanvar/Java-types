let li = document.querySelector("#list")
let form = document.querySelector("#form");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let img_url = document.querySelector("#image_url");
let category = document.querySelector("#category");
let country = document.querySelector("#condition");
let add = document.querySelector(".add");
let isEditing = false;
let editId
if (isEditing) {
    add.textContent = "update"
}else {
    add.textContent = "add"
}
let dataFetch = async () => {
    li.innerHTML = ''
    let status = await fetch("https://effective-mobile.duckdns.org/api/ads/");
    let data = await status.json();
    getData(data.results);
}
dataFetch();

function getData(data ) {
    data.slice(0 ,8).forEach((item, index) => {
        console.log(item)
        let list = document.createElement("li");
        li.style.height = "500px";
        list.innerHTML = `
        <div style="background: #fff700;
background: linear-gradient(93deg, rgba(255, 247, 0, 1) 0%, rgba(255, 0, 0, 1) 100%);"
        class="text-[#fff] rounded-[25px] text-center p-4 max-w-[300px] h-[310px]">
        <p>
        <span>${index + 1}</span>
        ${item.title}
        </p>
        <p>${item.description.length > 60 ? item.description.slice(0, 60) + "..." : item.description}</p>
        
        <img class="w-[170px] h-[160px] m-auto rounded-[20px]" src="${item.image_url ? item.image_url : "./iphone.jpg"}" alt="${item.image_url }">
       <div class="flex gap-2 justify-items-center">
        <button data-id="${item.id}" class="delete_btn bg-red-600 p-4 w-full text-[#fff] font-bold rounded-md mt-4"> Delete</button>
        <button data-id="${item.id}" class="edit-btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold mt-4 rounded-md py-4 px-4">Edit</button>
       </div>
        <div>`;
        list.style.listStyle = "none";
        li.appendChild(list);
    })
    let button = document.querySelectorAll(".delete_btn");
    let editbtn = document.querySelectorAll(".edit-btn");
    button.forEach(btn => {
        btn.addEventListener("click", (a) => {
            let id = a.target.getAttribute("data-id");

            let  Delete = async ()=>{
               await deleteId(id)
            }
            Delete()
        })
    })
    editbtn.forEach(editId => {
        editId.addEventListener("click", (e) => {
            let id = e.target.getAttribute("data-id");
            editAction(id)
        })
    })
}
async function editAction(id) {
    let res = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`)
    let data = await res.json();

         title.value = data.title;
         description.value = data.description;
         img_url.value = data.image_url;
         category.value = data.category;
         country.value = data.condition;
         editId = id
         isEditing= true
    add.textContent = "update"
}
async function deleteId(id) {
    let res = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`, {
        method: "DELETE",
    })

    if(res.ok){
        alert("uchirildi")
        dataFetch();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");
    let postData = async () => {
        let post

        if(isEditing){
            post = await fetch(`https://effective-mobile.duckdns.org/api/ads/${editId}/`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title: title.value,
                    description: description.value,
                    image_url: img_url.value,
                    category: category.value,
                    condition: country.value,
                })
            })
        }else {
            post = await fetch("https://effective-mobile.duckdns.org/api/ads/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title: title.value,
                    description: description.value,
                    image_url: img_url.value,
                    category: category.value,
                    condition: country.value,
                })
            })
        }

        if (post.ok) {
            alert("ishlayapdi")
            dataFetch();
        }else{
            alert("error");
        }

    }
    postData()
    dataFetch();
})