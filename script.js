const keys = document.querySelectorAll(".key");
const sound = document.getElementById("clickSound");
const para = document.getElementById("para");

const correctBox = document.getElementById("correct");
const wrongBox = document.getElementById("wrong");

const text =
`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima facilis dolor ipsum aperiam quibusdam nemo natus laudantium beatae laboriosam quae deleniti minus quam natus quod necessitatibus accusantium consequatur dolorem.`;

let index = 0;
let correct = 0;
let wrong = 0;

function showText() {

    let html = "";

    for(let i = 0; i < text.length; i++) {

        if(i < index) {

            html += `<span class="${
                text[i] === typedChar ? "correct" : "wrong"
            }">${text[i]}</span>`;

        }

        else if(i === index) {

            html += `<span class="current">${text[i]}</span>`;

        }

        else {

            html += text[i];

        }
    }

    para.innerHTML = html;
}

let typedChar = "";

showText();

document.addEventListener("keydown",(e)=>{

    const pressed = e.key;

    typedChar = pressed;

    keys.forEach(key=>{

        if(
            key.innerText.toUpperCase() === pressed.toUpperCase() ||
            (pressed === " " && key.innerText === "Space") ||
            (pressed === "Backspace" && key.innerText === "Backspace") ||
            (pressed === "Enter" && key.innerText === "Enter") ||
            (pressed === "Shift" && key.innerText === "Shift") ||
            (pressed === "Control" && key.innerText === "Ctrl") ||
            (pressed === "Alt" && key.innerText === "Alt")
        ){

            key.classList.add("active");

            sound.currentTime = 0;
            sound.play();

            setTimeout(()=>{
                key.classList.remove("active");
            },100);
        }

    });

    if(index < text.length){

        if(pressed === text[index]){

            correct++;

        }

        else{

            wrong++;

        }

        index++;

        correctBox.innerText = correct;
        wrongBox.innerText = wrong;

        showText();
    }

});