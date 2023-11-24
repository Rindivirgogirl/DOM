const getclick= document.querySelector("#btn")
let isRed = false
getclick.addEventListener("click", () =>{
const getkotak = document.querySelector(".kotak");

if (!isRed) {
    getkotak.style.backgroundColor = "red"
    isRed = true
} else {
    getkotak.style.backgroundColor = "aqua"
    isRed = false
}

})


