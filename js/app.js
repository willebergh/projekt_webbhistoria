function containerStyle(selector) {
    return `${selector} {
        width: 100%;
        height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        overflow: hidden;
        position: relative;
        background-color: #ccc;
    }`
}

class Wheel {
    constructor(options) {
        console.log("Wheel");

        this.options = options;

        this.initElements();
        this.initListeners();

        this.pos = {
            min: 0,
            current: 0,
            max: this.targets.length - 1,
        };
        this.animeOptions = {
            easing: "easeOutQuint",
            targets: ".section",
            duration: 1000,
        };
    }

    initElements() {
        const container = this.options.container;
        const targets = document.querySelectorAll(this.options.targets);
        this.targets = targets;
        this.nr = 360 / targets.length;

        const style = document.createElement("style");
        style.innerHTML += containerStyle(container);
        document.body.appendChild(style);

        targets.forEach((el, i) => {
            el.style.transform = `rotate(${this.nr * i}deg)`
        })
    }

    initListeners() {
        document.querySelectorAll(".arrow").forEach(el => el.addEventListener("click", this.handleButtonClick));
        document.addEventListener("keydown", this.handleKeydown);
    }

    handleButtonClick = e => {
        const el = e.path.find(el => el.attributes["wheel-button"]);
        const direction = el.attributes["wheel-direction"].value;
        this.spin(direction);
    }

    handleKeydown = e => {
        const key = e.key;
        if (key === "ArrowRight") this.spin("antiClockWise");
        if (key === "ArrowLeft") this.spin("clockWise");
    }

    spin(direction) {
        if (direction === "clockWise") {
            this.pos.current++;
        }

        if (direction === "antiClockWise") {
            this.pos.current--;
        }

        anime({
            ...this.animeOptions, rotate: (el, i) => {
                let rotation = this.nr * this.pos.current + (this.nr * i)
                return rotation;
            },
        });
    }

}

const wheel = new Wheel({
    container: ".wheel",
    targets: ".section"
});