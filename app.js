console.log('hello javascript');

const btn = document.querySelector("button.btn-mobile");
const menu = document.querySelector(".btn-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    } );

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menu.classList.toggle("hidden");
        };
    });
