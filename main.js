onload = () =>{
        document.body.classList.remove("container");
          // Reproduce la música después de 0.1s
    setTimeout(() => {
        const audio = document.getElementById("bg-music");
        if (audio) {
            audio.play().catch(err => {
                console.log("Autoplay bloqueado por el navegador:", err);
            });
        }
    }, 100); // 100 ms = 0.1s
};