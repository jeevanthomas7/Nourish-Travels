
function toggleFaq(item) {
  const answer  = item.querySelector(".faq-answer");
  const icon    = item.querySelector(".faq-icon");
  const isOpen  = answer.classList.contains("open");

  document.querySelectorAll(".faq-item").forEach((el) => {
    el.classList.remove("active");
    el.querySelector(".faq-answer").classList.remove("open");
    el.querySelector(".faq-icon").textContent = "↓";
  });

 
  if (!isOpen) {
    item.classList.add("active");
    answer.classList.add("open");
    icon.textContent = "↑";
  }
}
