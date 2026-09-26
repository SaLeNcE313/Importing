const message = `خواهر عزیزم، تولدت مبارک 🤍✨

شاید ما از یک خون و یک خانواده به دنیا نیامده باشیم، اما بعضی آدم‌ها را خدا نه با نسبت، بلکه با محبت وارد زندگی‌مان می‌کند؛ آدم‌هایی که آرام‌آرام جای خودشان را در قلبمان پیدا می‌کنند و جایی می‌رسد که دیگر نمی‌توان آن‌ها را با هیچ واژه‌ای جز «خانواده» توصیف کرد.

تو برای من فقط یک خواهر نیستی؛ بخشی از خاطرات، لبخندها و لحظه‌های ارزشمند زندگی منی.
و از ته قلبم خوشحالم که زندگی، تو را سر راه من قرار داد.

آرزو می‌کنم در سال جدید زندگی‌ات، هیچ غمی ماندگار نباشد، دلت همیشه آرام بماند و لبخندت هیچ‌وقت از روزهایت دور نشود.
امیدوارم تمام آرزوهایی که شاید هیچ‌وقت به زبان نیاوردی، یکی‌یکی به زیباترین شکل ممکن برایت اتفاق بیفتند.

همیشه بخند، همیشه بدرخش و همیشه یادت باشد که بودنت برای من باارزش است. 🫂🤍✨`;

const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");
const finalMessage = document.getElementById("final-message");

let index = 0;

const normalDelay = 58;

function getDelay(character) {

    if (character === " ") {
        return 32;
    }

    if (
        character === "." ||
        character === "!" ||
        character === "؟" ||
        character === "؛" ||
        character === "،"
    ) {
        return 230;
    }

    if (character === "\n") {
        return 520;
    }

    return normalDelay;
}

function typeText() {

    if (index < message.length) {

        const character = message[index];

        typedText.textContent += character;

        index++;

        setTimeout(typeText, getDelay(character));

    } else {

        cursor.style.display = "none";

        setTimeout(() => {
            finalMessage.classList.add("show");
        }, 650);
    }
}

/* Generate Stars */

const starsContainer = document.querySelector(".stars");

const starCount =
    window.innerWidth < 600 ? 95 : 150;

for (let i = 0; i < starCount; i++) {

    const star = document.createElement("span");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 1.7 + 0.7;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    starsContainer.appendChild(star);
}

/* Start Typing */

window.addEventListener("load", () => {

    setTimeout(() => {
        typeText();
    }, 900);

});
