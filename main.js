let li = document.querySelector("#list")
let dataFetch = async () => {
    li.innerHTML = ''
    let status = await fetch("https://effective-mobile.duckdns.org/api/ads/", {
    });
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
        class="text-[#fff] rounded-[25px] text-center p-4 max-w-[300px] h-[250px]">
        <p>
        <span>${index + 1}</span>
        ${item.title}
        </p>
        <p>${item.description.length > 60 ? item.description.slice(0, 60) + "..." : item.description}</p>
        
        <img class="w-[110px] h-[150px] m-auto rounded-[20px]" src="${item.image_url ? item.image_url : "./iphone.jpg"}" alt="${item.image_url }">
        <div>`;
        list.style.listStyle = "none";
        li.appendChild(list);
    })
}

    let form = document.querySelector("#form");
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let img_url = document.querySelector("#image_url");
    let category = document.querySelector("#category");
    let country = document.querySelector("#condition");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");
    let postData = async () => {
        let post = await fetch("https://effective-mobile.duckdns.org/api/ads/", {
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
        if (post.ok) {
            alert("ishlayapdi")
        }else{
            alert("error");
        }

    }
    postData()
    dataFetch();
})