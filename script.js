

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
                    setTimeout(() => {
                        enableBtn()
                    }, 4000)
                    

                })
            
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
    document.getElementById("spinner").style.display = "block";
    document.getElementById("mainBox").style.opacity = "0.2";




}

function enableBtn() {

    document.getElementById("funBtn").disabled = false;
    document.getElementById("funBtn").classList.remove("disableBtn")
    document.getElementById("spinner").style.display = "none";
    document.getElementById("mainBox").style.opacity = "1";


}