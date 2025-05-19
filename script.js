

let userText = document.querySelector("#inputText");
let guessBtn = document.querySelector("#funBtn");
let resultBox = document.querySelector(".result");
let genderType = document.getElementById("genderType");
const spinner = document.getElementById('spinner');





guessBtn.addEventListener("click",

    () => {
        let text = userText.value;
        if (text) {
            disableBtn() 
            spinOnFunc()
            resultBox.innerHTML=''
            fetch(`https://api.genderize.io?name=${text}`)
                .then((response) => response.json())
                .then((data) => {
                    spinOffFunc()
                    console.log(data);
                    displayFunc(data)
                   
                })

        }
        else
            alert("Kindly Write a Name")
    }
)

function displayFunc(data) {
    const heading = document.createElement("h1");
    heading.className="genderValue"
    heading.textContent =  `${data.gender}`;
   resultBox.appendChild(heading);
    const summary = document.createElement("p");
    summary.textContent=`${data.name} is a ${data.gender} name. the probability of correction is ${(data.probability*100).toFixed(1)}% `;
     resultBox.appendChild(summary);
    userText.value='';
    enableBtn()


}
function disableBtn() {
    document.getElementById("funBtn").disabled = true;

    document.getElementById("funBtn").classList.add("disableBtn")

    




}

function enableBtn() {

    document.getElementById("funBtn").disabled = false;
    document.getElementById("funBtn").classList.remove("disableBtn")

   


}
const spinOnFunc = () => {
    spinner.classList.add('active');


    
    


}
const spinOffFunc = () => {
    spinner.classList.remove('active');

}