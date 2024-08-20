const renderCards = require("./renderCards");
const axios = require("axios")

/*$.get("https://students-api.up.railway.app/movies",(data,error) =>{
    renderCards(data);

});*/


$(document).ready(async ()=>{

    const isMainPage = window.location.pathname === '/index.html' || window.location.pathname === '/';

    if (isMainPage) {
        const moviesContainer = document.getElementById("movies-container");

        if (!moviesContainer) {
            console.error("moviesContainer is null");
            return;
        }
    }
    try{
        const response = await axios
        .get("http://localhost:3000/movies")
        console.log("Axios response:", response);
        if (response.status === 200) {
            const data = response.data;
            //console.log("Received data:", data);
            
            renderCards(data);
        }else{
            console.error("Unexpected response status:", response.status);
        }

    }catch(error){
        //alert("Algo salio mal")
        //console.error("Error:", error)
        //console.log("algo anda mal",error)

        if (error.response) {
            console.error("Error data:", error.response.data);
            console.error("Error status:", error.response.status);
        } else {
            console.error("Error message:", error.message);
        }
    }
});


const form = document.querySelector("form");

let genre = []

function handleCheckboxChange(e){
    if(e.target.checked){
        genre.push(e.target.value)
    }else{
        genre = genre.filter((item) => item !== e.target.value);
    }
}

const checkboxes = document.querySelectorAll('input[name="genre"]');


checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
})

form.addEventListener("submit",async(event)=>{
    event.preventDefault()

const formData = new FormData(form);

const data = Object.fromEntries(formData.entries());

data.genre = genre;

try {
const response = await axios.post("http://localhost:3000/movies", data);

if(response.status === 201){
    alert("Movie created successfully");
    window.location.href = "http://127.0.0.1:8080/index.html"
}

console.log(response);
}catch(error){
    console.error(error);
}
});

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", ()=>{
    form.reset();
    genre = [];
})








