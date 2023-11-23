const getMin = document.querySelector("#Min")
const getAngka = document.querySelector("#Angka")
const getPlus = document.querySelector("#Plus")

getPlus.addEventListener("click", function (){

if (getAngka.innerHTML<10) {
    getAngka.innerHTML++
}
})

getMin.addEventListener("click", function (){
    if (getAngka.innerHTML>0) {
       getAngka.innerHTML-- 
    }})

const getBtn= document.getElementById("Btn")
 
getBtn.addEventListener('click', function() {
    const inputValue = document.getElementById('input').value;

    if (inputValue !== '') {
        const newListElement = document.createElement('li');
        newListElement.innerHTML = inputValue;

        const getList = document.getElementById('list')
        getList.appendChild(newListElement)

        document.getElementById('input').value='';

        //Ini untuk menghapus elemen//
        newListElement.addEventListener("click", function() {
            this.parentNode.removeChild(this)
        })

    }
})


document.getElementById('btnRemove').addEventListener("click", function() {
    const list = document.getElementById('list');

    //mengambil indeks elemn terakhir//
    const lastIndex = list.children.length - 1;

    //menghapus elemen terakhir dari daftar//
    if (lastIndex >=0) {
        list.removeChild(list.children[lastIndex])
    }
})
