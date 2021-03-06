const links = document.querySelectorAll(".link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        removeActiveClass();
        link.classList.add("active");
    });
});

function removeActiveClass() {
    links.forEach((link) => {
        link.classList.remove("active");
    });
}
