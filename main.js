window.onload = () => {
    document.body.classList.remove("container");

    const audio = document.getElementById("myAudio");
    const playButton = document.getElementById("playButton");

    audio.play().catch(error => console.log("Error al reproducir el audio:", error));

    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.currentTime = 0; // Reinicia la música al principio
        audio.play().catch(error => console.log("Error al reproducir el audio:", error));
        playButton.textContent = "Pausar música";
      } else {
        audio.pause();
        playButton.textContent = "Reproducir música";
      }
   });
};


