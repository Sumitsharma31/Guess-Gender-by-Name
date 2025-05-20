

let userText = document.querySelector("#inputText");
let guessBtn = document.querySelector("#funBtn");
let resultBox = document.querySelector(".result");
let genderType = document.getElementById("genderType");
const spinner = document.getElementById('spinner');


function guessFunc() {
    let text = userText.value;
    if (text) {
        disableBtn()
        spinOnFunc()
        resultBox.innerHTML = ''
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


guessBtn.addEventListener("click", guessFunc)

function displayFunc(data) {
    if (data.gender == null) {
        alert("Please Write a Name");
        const summary = document.createElement("p");
        summary.textContent = `--> One name, one guess: gender detection in action…`
        summary.className = "promoText"
        resultBox.appendChild(summary);
        return;
    }
    const heading = document.createElement("h1");
    heading.className = "genderValue"
    heading.textContent = `${data.gender}`;
    resultBox.appendChild(heading);
    const summary = document.createElement("p");
    summary.textContent = `The name ${userText.value} is ${data.gender},With a ${(data.probability * 100).toFixed(1)}% confidence level.`;
    summary.className = 'summary';
    resultBox.appendChild(summary);
    userText.value = '';
    enableBtn()



}
function disableBtn() {
    document.getElementById("funBtn").disabled = true;

    document.getElementById("funBtn").classList.add("disableBtn");
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

//to call back Guess Gender function on enter click
userText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        guessFunc()
    }
});
