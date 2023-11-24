const getInput= document.getElementById("lol")

getInput.addEventListener("keyup", function () {
    const getText = document.getElementById("lols")
    const getKotak = document.querySelector(".kotak")
    getKotak.style.height=getInput.value + "px"
    getKotak.style.width=getInput.value + "px"
    // getKotak.style.backgroundColor = getInput.value
    getText.innerHTML = getInput.value
    
})

