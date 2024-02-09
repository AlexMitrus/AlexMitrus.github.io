document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let currentIndex = 0;

    window.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
            currentIndex++;
        } else if (e.key === "ArrowUp" && currentIndex > 0) {
            currentIndex--;
        }

        scrollToSection(currentIndex);
    });

    function scrollToSection(index) {
        const yOffset = index * 100;
        document.getElementById("pinballMachine").style.transform = `translateY(-${yOffset}%)`;
    }
});
