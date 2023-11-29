const getAlert = document.getElementById("alert")

getAlert.addEventListener("click", function () {
   alert("Hello..") 
})

const getConfirm = document.getElementById("confirm")


getConfirm.addEventListener("click", function () {
   const iniConfrim = confirm("Apakah aku mahasiswa?") 
   if (iniConfrim == true) {
    alert("akumahasiswa")
   }else if(iniConfrim == false){
    alert("akubukanmahasiswa")
  }
})

const getPrint = document.getElementById("print")

getPrint.addEventListener("click", function () {
   print("ok") 
})