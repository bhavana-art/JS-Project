const paragraphs = document.querySelectorAll(".paragraphs input");
const words = document.querySelectorAll(".words input");
const tag = document.querySelectorAll(".tags #tag");
const output = document.querySelector(".output");

console.log(words.length);
console.log("hr");

for (let i = 0; i < words.length; i++) {
        words[i].addEventListener("input", e => {
           let minVal = parseInt(words[0].value);
           let maxVal = parseInt(words[1].value);
           console.log(minVal);
           console.log(maxVal);

        });
    }