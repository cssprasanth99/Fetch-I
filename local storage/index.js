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
    console.log(user_details);
}