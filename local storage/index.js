let form = document.querySelector("form");


form.addEventListener("submit", () => {
    getData();
})

var arr = [];
function getData() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    var obj = {
        name: name,
        age: age,
    }

    arr.push(obj);
    localStorage.setItem("user_details", JSON.stringify(arr));
    displayOnDom(arr);
}

function displayOnDom(arr) {
    let thead = document.querySelector("thead");
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    arr.forEach(ele => {
        thead.innerHTML = "";
        let thName = document.createElement("th");
        let thAge = document.createElement("th");
        thAge.innerText = "Age";
        thName.innerText = "Name";
        thead.append(thName, thAge);

        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.innerText = ele.name;
        let tdAge = document.createElement("td")
        tdAge.innerText = ele.age;
        tr.append(tdName, tdAge);
        tbody.append(tr);
    });
}  
