
// for projects cards populating 
let cards = document.querySelector(".cardContainer");

function getCardDetails(image,title,link,demo){

cards.innerHTML = cards.innerHTML + `<div class="card">
                    <img src="${image}" alt="">
                    <h1 class="heading">${title}</h1>
                    <div class="btn-group">
                    <button class="button"><a href="${link}" target="_">Github</a></button>
                    <button class="button"><a href="${demo}" target="_">Live Demo</a></button>
                </div>
                </div>`;
    
}

getCardDetails("images/netflixclone.png","Netflix Clone","https://github.com/Sangam941/Netflix-Clone.git","https://sangam941.github.io/Netflix-Clone/")
getCardDetails("images/tic.jpeg","Tic Tak Toe","https://github.com/Sangam941/Tic-Tac-Toe.git","https://sangam941.github.io/Tic-Tac-Toe/")
getCardDetails("images/spotify.jpeg","Spotify Clone","https://github.com/Sangam941/Spotify-Clone.git","https://sangam941.github.io/Spotify-Clone/")


// creating skills, education and training details

let detail1 = document.querySelector(".detail1");
let detail2 = document.querySelector(".detail2");
let detail3 = document.querySelector(".detail3");

detail1.classList.remove("hide1");

document.getElementById("skill").addEventListener("click",e=>{
    detail2.classList.add("hide2");
    detail3.classList.add("hide3");
    detail1.classList.remove("hide1");
})
document.getElementById("training").addEventListener("click",e=>{
    detail1.classList.add("hide1");
    detail2.classList.remove("hide2");
    detail3.classList.add("hide3");
})
document.getElementById("education").addEventListener("click",e=>{
    detail1.classList.add("hide1");
    detail2.classList.add("hide2");
    detail3.classList.remove("hide3");
})

/*
let details = document.querySelector(".detail");
let target;
let role = document.querySelectorAll(".role li");
async function main() {
    let a = await fetch(`http://127.0.0.1:5501/Skills/info.json`);
            let response = await a.json();
            // console.log(response)
            // getdetails(target)

            details.innerHTML = details.innerHTML + `<div class="title">
            <div class="smalltitle">
                ${response.smalltitle1}
            </div>
            <div class="bigtitle">
                ${response.bigtitle1}
            </div>
        </div>
        <div class="title">
            <div class="smalltitle">
                ${response.smalltitle2}
            </div>
            <div class="bigtitle">
                ${response.bigtitle2} 
            </div>
        </div>
        <div class="title">
            <div class="smalltitle">
                ${response.smalltitle3}
            </div>
            <div class="bigtitle">
                ${response.bigtitle3}
            </div>
        </div>`;

    Array.from(role).forEach(e => {
        e.addEventListener("click",async (element)=>{
            details.innerHTML = "";
            target = element.target.innerHTML;
            // console.log(target)
            let a = await fetch(`http://127.0.0.1:5501/${target}/info.json`);
            let response = await a.json();
            // console.log(response)
            // getdetails(target)

            details.innerHTML = details.innerHTML + `<div class="title">
            <div class="smalltitle">
                ${response.smalltitle1}
            </div>
            <div class="bigtitle">
                ${response.bigtitle1}
            </div>
        </div>
        <div class="title">
            <div class="smalltitle">
                ${response.smalltitle2}
            </div>
            <div class="bigtitle">
                ${response.bigtitle2} 
            </div>
        </div>
        <div class="title">
            <div class="smalltitle">
                ${response.smalltitle3}
            </div>
            <div class="bigtitle">
                ${response.bigtitle3}
            </div>
        </div>`;
        
        })
    });
}

main();*/

//hamburger for responsive
let logo = document.querySelector(".hamburger").firstElementChild;
let logo2 = document.querySelector(".cross").firstElementChild;

logo.addEventListener("click", (e) => {
    document.querySelector(".slide").style.display = "block";
    
})
logo2.addEventListener("click",e=>{
    document.querySelector(".slide").style.display = "none";
})


//to make navbar text green when clicked
let active = document.querySelectorAll(".active li a");
let active2 = document.querySelectorAll(".role li");
console.log(active)

active.forEach(e=>{
    e.addEventListener("click", ()=>{
        active.forEach(element=>{
            element.style.color = "white";
        })
        e.style.color = "rgb(22, 204, 22)";
    })
})
active2.forEach(e=>{
    e.addEventListener("click", ()=>{
        active2.forEach(element=>{
            element.style.color = "white";
        })
        e.style.color = "rgb(22, 204, 22)";
    })
})

