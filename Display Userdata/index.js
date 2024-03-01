let btn = document.querySelector("button");
let dataContainer = document.getElementById("dataContainer");

btn.addEventListener("click", () => {
    getData();
})


function getData() {

    let url = "https://reqres.in/api/users";

    let fetchData = fetch(url);

    fetchData.then((res) => {
        return res.json();
    })
        .then((y) => {
            console.log(y);
            let userData = y.data;
            console.log(userData);
            userData.forEach((item) => {
                let div = document.createElement("div");
                let userName = document.createElement("p");
                let email = document.createElement("p");
                let img = document.createElement("img");

                div.className = "card";
                userName.innerText = item.first_name + " " + item.last_name;
                console.log(userName);
                email.innerText = item.email;
                img.src = item.avatar;

                div.append(userName, email, img);
                dataContainer.append(div);
            })
        })
}