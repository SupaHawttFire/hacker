

const letterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
hackerWord = document.querySelector(".hacker");

//Hacker text, use class .hacker, include data-value attribute
{
hackerWord.onmouseover = event => {
    let iterations = -2;

    let interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index <= iterations) {
                return event.target.dataset.value[index];
            }
            return letterList[Math.floor(Math.random()*26)]
        })
        .join("");
        

    if(iterations > event.target.dataset.value.length) {
        clearInterval(interval);
    }
    iterations += 1/2;
    }, 30);
};
}

