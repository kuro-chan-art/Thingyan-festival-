document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.href.includes(".html")) {
            e.preventDefault();
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location = this.href;
            }, 500);
        }
    });
});

// SPLASH EFFECT ON CLICK
document.addEventListener("click", function(e) {

    for (let i = 0; i < 8; i++) {
        let splash = document.createElement("div");
        splash.className = "splash";

        // Random spread
        let x = e.clientX + (Math.random() - 0.5) * 100;
        let y = e.clientY + (Math.random() - 0.5) * 100;

        splash.style.left = x + "px";
        splash.style.top = y + "px";

        document.body.appendChild(splash);

        setTimeout(() => {
            splash.remove();
        }, 600);
    }

});

// ACTIVE NAV LINK
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// MULTI-LAYER WATER RIPPLE
document.querySelectorAll(".arrow-btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        createRipple(centerX, centerY, "layer1");
        createRipple(centerX, centerY, "layer2");
        createRipple(centerX, centerY, "layer3");

    });

});

function createRipple(x, y, layer) {
    const ripple = document.createElement("span");

    ripple.classList.add("ripple", layer);

    const size = 80 + Math.random() * 40; // random size (natural feel)

    ripple.style.width = size + "px";
    ripple.style.height = size + "px";

    ripple.style.left = (x - size / 2) + "px";
    ripple.style.top = (y - size / 2) + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1200);
}