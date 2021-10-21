// Cand dai scroll, sa adauge clasa sticky, care va adauga o clasa
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})



function toggleMenu(){
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation")
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}