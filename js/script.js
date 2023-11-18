document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.querySelector(".typing-text");

    // Typing effect for the welcome message


    const welcomeMessage = "Hello, I'm Abdelaziz Hammad.Welcome to my personal website. I am a passionate software developer with expertise in various technologies. ";

    let index = 0;

    function typeWelcomeMessage() {

        if (index < welcomeMessage.length) {
            welcomeText.innerHTML += welcomeMessage.charAt(index);
            index++;
            setTimeout(typeWelcomeMessage, 40);
        }
    }



    typeWelcomeMessage();
});

function selectLanguage(language) {
    if (language === 'en') {
        window.location.href = './pages/english.html'; // Redirect to the English version
    } else if (language === 'fr') {
        window.location.href = './pages/french.html'; // Redirect to the French version
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const starrySky = document.querySelector(".starry-sky");

    function createStar() {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = getRandomColor();
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 99 + 77}s`; // Adjust the duration as needed
        star.style.animationDelay = `-${Math.random()}s`;
        star.style.animationIterationCount = "infinite";
        star.style.animationTimingFunction = "linear";
        star.style.animationName = Math.random() < 0.5 ? "moveLeft" : "moveRight";
        star.style.opacity = Math.random();
        return star;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function generateStars() {
        for (let i = 0; i < 100; i++) {
            starrySky.appendChild(createStar());
        }
    }

    generateStars();
});

