

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

document.getElementById("button-forward").addEventListener("click", e => {
    return goForward();
});

document.getElementById("button-backward").addEventListener("click", e => {
    return goBackwards();
});

document.addEventListener("keydown", e => {
    const key = e.key;
    if (key === "ArrowRight") return goForward();
    if (key === "ArrowLeft") return goBackwards();
    return;
})

function goForward() {
    anime({
        ...options,
        rotate: `+=${nr}`,
    });
}

function goBackwards() {
    anime({
        ...options,
        rotate: `-=${nr}`,
    });
}