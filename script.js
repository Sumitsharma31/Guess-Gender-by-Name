

let userText = document.querySelector("#inputText");
let guessBtn = document.querySelector("#funBtn");
let genderType = document.querySelector("#genderType");
let loader = document.querySelector(".spinner");

guessBtn.addEventListener("click",

    () => {
        let text = userText.value;
        if (text) {

            fetch(`https://api.genderize.io?name=${text}`)
                .then((response) => response.json())
                .then((data) => {
                disableBtn()
                displayFunc(data)
               setTimeout(()=>{
                enableBtn()
               },4000)
               console.log(2);
               
                })
displayFunc(data)
        }
        else
            alert("Kindly Write a Name")
    }
)

function displayFunc(data) {

    genderType.innerText = `${data.gender}`;
   

}
function disableBtn() {
    document.getElementById("funBtn").disabled = true;

     document.getElementById("funBtn").classList.add("disableBtn")
    loader.disabled=false;
    


}

function enableBtn() {

    document.getElementById("funBtn").disabled = false;
     document.getElementById("funBtn").classList.remove("disableBtn")
    loader.disabled=true;


}