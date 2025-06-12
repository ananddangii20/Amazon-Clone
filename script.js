

let modebutton = document.querySelector(".darkmode");
let windowbg = document.querySelector(".window");
let panel = document.querySelector(".panel");
let body = document.body;
let boxes = document.querySelectorAll(".box");
let heromsg = document.querySelector(".hero-msg")
let foot1 = document.querySelector(".backto");
let foot2 = document.querySelector(".followup");
let heroimage = document.querySelector(".hero-section");

let ordernowtext = document.querySelectorAll(".box p");
let title = document.querySelectorAll(".box1-content h2");
let herotext = document.querySelector(".hero-msg p");

let lightmode = true;

modebutton.addEventListener("click", () => {
    if (lightmode) {

        body.style.backgroundColor = "#0F1111";
        panel.style.backgroundColor = "#0F1111";
        panel.style.color = "white";
        windowbg.style.backgroundColor = "#0F1111";
        boxes.forEach((box) => { box.style.backgroundColor = "#1f2020"; })
        heromsg.style.backgroundColor = "#0F1111"

        let allText = document.querySelectorAll("p, h2, a");
        allText.forEach((el) => {
            el.style.color = "white";
        });

        foot1.style.backgroundColor = "#0f1111"
        foot2.style.backgroundColor = "#0f1111"
        heroimage.style.backgroundImage = "url('hero_image_dark.jpg')"
        modebutton.innerHTML = '<i class="fa-solid fa-toggle-on fa-rotate-180" style="color: #FFD43B;"></i> Light Mode';
        lightmode = false;
    } else {

        body.style.backgroundColor = "white";
        panel.style.backgroundColor = "#222f3d";
        panel.style.color = "white";
        windowbg.style.backgroundColor = "#b1c9cb";

        let allText = document.querySelectorAll("p, h2, a");
        allText.forEach((el) => {
            el.style.color = "white";
        });

        boxes.forEach((box) => { box.style.backgroundColor = "white"; })
        heromsg.style.backgroundColor = "white"

        foot1.style.backgroundColor = "#222f3d"
        foot2.style.backgroundColor = "#222f3d"
        heroimage.style.backgroundImage = "url('hero_image.jpg')"


        ordernowtext.forEach((text) => { text.style.color = "#052c33"; })
        title.forEach((text) => { text.style.color = "black"; })
        herotext.style.color = "black";

        modebutton.innerHTML = '<i class="fa-solid fa-toggle-on" style="color: #FFD43B;"></i> Dark Mode';
        lightmode = true;
    }
});
