const modalContainer = document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", toggelModal));

function toggelModal() {
  
  modalContainer.classList.toggle("active")
}
