document.getElementById("year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(".card, .observation, .food-list div");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{ opacity: 0, transform: "translateY(14px)" },
         { opacity: 1, transform: "translateY(0)" }],
        { duration: 500, easing: "ease-out", fill: "forwards" }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

cards.forEach(card => {
  card.style.opacity = "0";
  observer.observe(card);
});
