onload = () => {
    document.body.classList.remove("container");
    function fixMobileHeight() {
  document.body.style.minHeight = window.innerHeight + "px";
}
window.addEventListener("resize", fixMobileHeight);
window.addEventListener("load", fixMobileHeight);

    const btn = document.getElementById("play-music");
    const audio = document.getElementById("bg-music");

    btn.addEventListener("click", () => {
        audio.volume = 0.7; // volumen de fondo (ajústalo entre 0 y 1)
        audio.play().then(() => {
            btn.style.display = "none"; // oculta el botón después de hacer clic
        }).catch(err => {
            console.log("Error al reproducir música:", err);
        });
    });
};
