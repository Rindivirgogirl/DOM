//ini untuk memanggil demo tanpa id//
const demo = document.querySelector("#demo")
demo.innerHTML= "RINDI"


const getById = document.getElementById("get-by-id")
getById.innerHTML = "berhasil get element by id"

const getByClass= document.getElementsByClassName("get-by-class")
for (let index = 0; index < getByClass.length; index++) {
getByClass[index].innerHTML = "berhasil get element by class"   
}

const getElement = document.getElementById("demo")
getElement.className = "color"
getElement.style.fontSize = "100px"


const createLoading = document.createElement("div")
createLoading.innerHTML = "loading"
createLoading.style.color=  "red"
getElement.appendChild(createLoading)