document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("check");
    const navUl = document.querySelector("nav ul");

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            navUl.style.opacity = "1";
            navUl.style.transform = "translateX(0)";
            navUl.style.pointerEvents = "auto";
        } else {
            navUl.style.opacity = "0";
            navUl.style.transform = "translateX(-100%)";
            navUl.style.pointerEvents = "none";
        }
    });
});
