const wrapper  = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML= "aaaaaaaa, (*/ω＼*)";
    gif.src = "https://tenor.com/bwK99.gif"

});

noBtn.addEventListener("mouseover", () => {
    const noBtnrect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnrect.width;
    const maxY = window.innerHeight - noBtnrect.height;

    const randomX = Math.floor(math.random() * maxX);
    const randomY = Math.floor(math.random()* maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomy + "px";


});