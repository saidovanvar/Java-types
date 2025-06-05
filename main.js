let li = document.querySelector("#list")
let dataFetch = async () => {
    let status = await fetch("https://crm-test-api.duckdns.org/api/Leads", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6ImFzaWxiZWsiLCJ1bmlxdWVfbmFtZSI6Iis5OTg5MTQ1NDIzMzkiLCJqdGkiOiIwN2NjZWFjZi0zNzYyLTRhOGYtOTVkMi1jZDA3NjhmNzBjM2IiLCJUZW5hbnRJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc1NTA4NDE5OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.UFF5AqUWqO-Reh-bDURJ4Vz1ifmbiu6zE47Rbzp_M-g"
        }
    });
    let data = await status.json();
    getData(data.items);
}
dataFetch();

function getData(data ) {
    data.forEach((item , index) => {
        console.log(item)
        let list = document.createElement("li");
        list.innerHTML = `
        <div class="bg-neutral-950 text-[#fff] rounded-[25px] text-center p-4 m-auto">
        <p>
        <span>${index+1}</span>
        ${item.firstName} {item.lastName}
        </p>
        <p>${item.phoneNumber}</p>
        <div>`;
        list.style.listStyle = "none";
        li.append(list);
    })
}