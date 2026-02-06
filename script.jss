function blowCandle() {
  const msg = document.getElementById("secret-message");
  msg.style.display = "block";
}

function previewImages(event) {
  const preview = document.getElementById("image-preview");
  preview.innerHTML = "";

  Array.from(event.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

// Autoplay fix (untuk HP)
window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play();
}, { once: true });
