/* Created by Tivotal */

const nav = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

function onDrag({ movementY }) {
  /* this will get all styles of nav */
  const navStyle = window.getComputedStyle(nav);

  /* here getting top of nav and converting it into string */
  const navTop = parseInt(navStyle.top);
  /* here getting height of nav and converting it into string */
  const navHeight = parseInt(navStyle.height);

  /* getting window innerheight */
  const windowHeight = window.innerHeight;

  /* logic to make btn draggable */
  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if (navTop > windowHeight - navHeight) {
    nav.style.top = `${windowHeight - navHeight}px`;
  }
}

nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag);
});
