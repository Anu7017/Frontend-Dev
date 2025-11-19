const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const pics = document.querySelectorAll(".pic");

pics.forEach(p => {
  p.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = p.src;
  };
});

modal.onclick = () => modal.style.display = "none";

document.querySelector(".modal-box").onclick = e => e.stopPropagation();
