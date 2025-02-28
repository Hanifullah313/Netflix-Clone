// scroll button

const trendingWrapper = document.querySelector(".trending-wrapper");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

leftBtn.addEventListener("click", () => {
  trendingWrapper.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  trendingWrapper.scrollBy({ left: 200, behavior: "smooth" });
});

