let container = document.getElementById("container");
let pageBtn = document.getElementById("pageButton");

// let cardData = {
//     albumId: 1,
//     id: 3,
//     title: "Lorem ipsum dolor sit amet.",
//     img: "http://via.placeholder.com/600/92c952",
//     thumbnailUrl: "http://via.placeholder.com/600/92c952",
// }


function createCard(obj) {
    let div = document.createElement("div");
    let img = document.createElement("img")
    let h2 = document.createElement("h2");

    div.className = "card";
    img.src = obj.url;
    img.alt = obj.title;
    h2.innerText = obj.title;

    div.append(img, h2);

    return div;
}

// let card1 = createCard(cardData);

// container.append(card1);

// data.forEach(item => {
//     let card = createCard(item);
//     container.append(card);
// })

let url = "https://jsonplaceholder.typicode.com/todos";

function fetchData(url, page = 1) {
    fetch(`${url}?_page=${page}&_limit=30`)
        .then(res => {
            let totalData = res.headers.get("X-Total-count");
            console.log(totalData);
            let limit = 30;
            let totalPages = Math.ceil(totalData / limit);
            pageBtn.innerHTML = "";
            for (let i = 1; i <= totalPages; i++) {
                let btn = document.createElement("button");
                btn.innerText = i;
                btn.addEventListener("click", () => {
                    fetchData(url, i);
                });
                pageBtn.append(btn);
            }

            return res.json();
        })
        .then(data => {
            console.log(data);
            appendData(data);
        })
}

function appendData(data) {
    container.innerHTML = "";
    data.forEach(item => {
        let p = document.createElement("p");
        let input = document.createElement("input");
        p.innerText = item.title;
        input.type = "checkBox";
        input.checked = item.completed;
        container.append(p, input);
    })
}

fetchData(url);
// let response = fetch(url);

// async function fetchData() {
//     try {
//         let res = await response;
//         let data = await res.json();
//         console.log(data);
//         data.forEach(element => {
//             let card = createCard(element);
//             container.append(card);
//         });

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchData();


// console.log(response);

// response
//     .then((data) => {
//         return data.json();
//     })
//     .then((data) => {
//         console.log(data);
//         data.forEach(element => {
//             let card = createCard(element);
//             container.append(card);
//         });
//     })
//     .catch((error) => {
//         console.log(error)
//     });