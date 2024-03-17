const API_key = "7e2c83e82ba94e6a8e9f6466242b8d4f";
const url = "https://newsapi.org/v2/everything?q=";
let cardContainer = document.querySelector(".card-container")
let btn = document.querySelector(".search")
let input = document.querySelector(".input")
let ipl = document.querySelector("#ipl")
let politics = document.querySelector("#politics")
let finance = document.querySelector("#finance")
let logo=document.querySelector(".logo")

// window.addEventListener("load", () => fetchnews("india"));
logo.addEventListener("click",function(){
window.location.reload()
})

async function fetchnews(query) {
    const result = await fetch(`${url}${query}&apiKey=${API_key}`);
    const data = await result.json();
    console.log(data.articles)
    // binddata(data.articles)
    cardContainer.innerHTML = ""
    data.articles.forEach((article) => {

        if(!article.urlToImage) return;


        let div = document.createElement("div")
        div.classList.add("card")
        cardContainer.appendChild(div)



        div.innerHTML = `  <div class="header">
        <img src="${article.urlToImage}" alt="news-image" id="news-img">


    </div>

    <div class="card-contents">
        <h3 class="title">"${article.title}"</h3>
            <h4 class="source">"${article.source.name}"</h4>
                <p class="content">"${article.description}"</p>`


        div.addEventListener("click", function () {
            window.open(article.url)
        })


    });

}

window.addEventListener("load", () => fetchnews("india"));
btn.addEventListener("click", function () {
    ipl.style.color="black"
   politics.style.color="black"
   finance.style.color="black"
    fetchnews(input.value)
})

// function navitem(id){
//     fetchnews(id)
// }

ipl.addEventListener("click", function () {
    fetchnews(ipl.innerHTML)
   ipl.style.color="grey"
   politics.style.color="black"
   finance.style.color="black"
   

})

politics.addEventListener("click", function () {
    fetchnews(politics.innerHTML)
    ipl.style.color="black"
   politics.style.color="grey"
   finance.style.color="black"
})

finance.addEventListener("click", function () {
    fetchnews(finance.innerHTML)
    ipl.style.color="black"
   politics.style.color="black"
   finance.style.color="grey"
})



// function binddata(articles) {
//     const cardcontainer = document.getElementsByClassName(".card-container")
//     const template = document.getElementsByClassName(".template")

//     cardcontainer.innerHTML = "";

//     articles.forEach((article) => {
//         if (!article.urlToimage) return;
//         // const cardclone = template.content.cloneNode(true);
//         // cardcontainer.appendChild(cardclone)

//         const cardClone = document.importNode(template, true);
//     const titleElement = cardClone.querySelector(".heading");
//     const descriptionElement = cardClone.querySelector(".content");
//     const imageElement = cardClone.querySelector("#news-img");
//     // const sourceElement = cardClone.querySelector(".card-source");
//     // const publishedAtElement = cardClone.querySelector(".card-published-at");
//     // const urlElement = cardClone.querySelector(".card-url");

//     titleElement.textContent = article.title;
//     descriptionElement.textContent = article.description;
//     imageElement.src = article.urlToImage;

//     cardContainer.appendChild(cardClone);
//     });
// }