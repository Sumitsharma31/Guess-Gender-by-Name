

let userText = document.querySelector("#inputText");
let guessBtn = document.querySelector("#funBtn");
let genderType = document.querySelector("#genderType");
const spinner = document.getElementById('spinner');

let dataContainer = genderType;

guessBtn.addEventListener("click",

    () => {
        let text = userText.value;
        if (text) {
            spinOnFunc()

            fetch(`https://api.genderize.io?name=${text}`)
                .then((response) => response.json())
                .then((data) => {
                    spinOffFunc()
                    console.log(data);
                    displayFunc(data)
                    dataContainer.classList.add('animate'); // Add animation class
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

    document.getElementById("mainBox").style.opacity = "0.2";




}

function enableBtn() {

    document.getElementById("funBtn").disabled = false;
    document.getElementById("funBtn").classList.remove("disableBtn")

    document.getElementById("mainBox").style.opacity = "1";


}
const spinOnFunc = () => {
    spinner.classList.add('active');


    
    


}
const spinOffFunc = () => {
    spinner.classList.remove('active');

}