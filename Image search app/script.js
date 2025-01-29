// // The method document.querySelector("h1") selects only the first <h1> element on the page. If there are multiple <h1> elements, the rest will remain unaffected.
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";


// // If you want to modify all <h1> elements, you can use document.querySelectorAll along with a loop:
// const allHeadings = document.querySelectorAll("h1");
// allHeadings.forEach(heading =>{
//     heading.textContent = "Kya haal hain aap logo ke!";
// });

// alert("hello");

// function multiply(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// console.log(multiply(5,80));


// // for single element
// document.querySelector("h1").addEventListener("click", () =>{
//     alert("Yeah baby!");
// })


// // for multiple elements
// document.querySelectorAll("h1","h2").forEach(headings =>{
//     addEventListener("click", () =>{
//         alert("Fuck you!");
//     })
// })

// const btn = document.querySelectorAll("#left-move img, #right-move img");
// const myImage = document.querySelector(".search-result img");

// const imageUrls = [];

// for(let i = 1 ; i <= 22 ; i++){
//     imageUrls.push(`images/wallpaperflare.com_wallpaper (${i}).jpg`)
// }

// let currentIndex = 0;

// function updateImage(){
//     myImage.setAttribute("src", imageUrls[currentIndex]);
// }

// btn.forEach(btns=>{
//     btns.addEventListener("click", () =>{
//     if(btns.id === "left-move") {
//         currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
//     } else{
//         currentIndex = (currentIndex + 1) % imageUrls.length;
//     }
//     updateImage();
//     });
// });

const btn = document.querySelector("#right-move img");
const btn2 = document.querySelector("#left-move img");
const myImage = document.querySelector(".search-result img");

const imageUrls = [];

for (let i = 1; i <= 22; i++) {
    imageUrls.push(`images/wallpaperflare.com_wallpaper (${i}).jpg`);
}
console.log("Image URLs: ", imageUrls);

let currentIndex = 0;  

function updateImage() {
    myImage.setAttribute("src", imageUrls[currentIndex]);
}

btn2.addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    if (currentIndex < 0) currentIndex = imageUrls.length - 1; 
    updateImage();
});

btn.addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
    const myName = prompt("Enter your name: ");
    if (myName) { 
        localStorage.setItem("name", myName);
        myHeading.textContent = `I am ${myName}`;
    } else {
        alert("Name cannot be empty!");
    }
}

myButton.addEventListener("click", () => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
        alert(`${storedName} is already registered!`);
    } else {
        setUsername();
    }
});


const storedName = localStorage.getItem("name");
if (storedName) {
    myHeading.textContent = `I am ${storedName}`;
} else {
    myHeading.textContent = "I am Anonymous";
}


let logOutBtn = document.querySelector("#log-out");
logOutBtn.addEventListener("click", () => {
    const storedName = localStorage.getItem("name");
    if (storedName) { 
        const dec = confirm(`Do you want to Log out as ${storedName}?`);
        if (dec) {
            localStorage.removeItem("name");
            myHeading.textContent = "I am Anonymous";
        }
        else{
            alert("No user is logged in!");
        }
    }
});
