

const elArr = document.querySelectorAll(".section");
const nr = 360 / elArr.length;

elArr.forEach((el, i) => {
    el.style.transform = `rotate(${nr * i}deg)`
})

const options = {
    easing: "easeInOutCubic",
    targets: ".section",
    duration: 1000
}

document.getElementById("button-forward")
    .addEventListener("click", e => {
        anime({
            ...options,
            rotate: `+=${nr}`,
        });
    });

document.getElementById("button-backward")
    .addEventListener("click", e => {
        anime({
            ...options,
            rotate: `-=${nr}`,
        });
    });