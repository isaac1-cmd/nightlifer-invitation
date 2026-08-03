/*==========================================
NIGHTLIFER WEBSITE
BLAKMIXED ENTERTAINMENT
SCRIPT.JS
==========================================*/


//===============================
// LOADER
//===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2200);

});


//===============================
// PERSONALIZED INVITATION
//===============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("guest") || "VIP Guest";

document.getElementById("guestName").innerHTML =
`Welcome ${guest} 👋`;

document.getElementById("guestName2").innerHTML =
guest;


//===============================
// RANDOM VIP NUMBER
//===============================

const randomNumber = Math.floor(Math.random() * 9000) + 1000;

document.getElementById("vipNumber").innerHTML =
    "NL-2026-" + randomNumber;



//===============================
// COUNTDOWN
//===============================

const eventDate = new Date("August 14, 2026 21:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(

        (distance % (1000 * 60 * 60 * 24)) /

        (1000 * 60 * 60)

    );

    const minutes = Math.floor(

        (distance % (1000 * 60 * 60)) /

        (1000 * 60)

    );

    const seconds = Math.floor(

        (distance % (1000 * 60)) /

        1000

    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);


//===============================
// SCROLL REVEAL
//===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(function (item) {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


//===============================
// HEADER EFFECT
//===============================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.90)";

        header.style.padding = "15px 8%";

    } else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.padding = "18px 8%";

    }

});


//===============================
// SMOOTH SCROLL
//===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


//===============================
// ACTIVE NAVIGATION
//===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


//===============================
// BUTTON HOVER EFFECT
//===============================

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });const confirmBtn = document.getElementById("confirmBtn");
const thankYou = document.getElementById("thankYou");

if (confirmBtn) {

    confirmBtn.addEventListener("click", async function () {

        const today = new Date();

        const data = {
            guest: guestName,
            invite: inviteNumber,
            rsvp: "Coming",
            date: today.toLocaleDateString(),
            time: today.toLocaleTimeString()
        };

        try {

            await fetch("https://script.google.com/macros/s/AKfycbxShPbmmN_IySujQFFa1oAyCKeB0DQpyFJV5huQ7W5_sinXKXKPvW70jF-VRfCPCtGBOw/exec", {

                method: "POST",

                body: JSON.stringify(data)

            });

            confirmBtn.style.display = "none";

            thankYou.style.display = "block";

        } catch (err) {

            alert("Unable to save RSVP. Please try again.");

        }

    });

}

});


//===============================
// CONSOLE MESSAGE
//===============================

console.log("Nightlifer Website Loaded Successfully");
// RSVP

const confirmBtn = document.getElementById("confirmBtn");

const thankYou = document.getElementById("thankYou");

confirmBtn.addEventListener("click", () => {

    confirmBtn.innerHTML = "✔ I'M COMING";

    confirmBtn.style.background = "#00c853";

    thankYou.style.display = "block";

});const downloadBtn = document.getElementById("downloadInvite");

downloadBtn.addEventListener("click", () => {

    window.print();

});