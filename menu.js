const btnMenu = document.getElementById("btn-menu");
            const menuMobile = document.getElementById("menu-mobile");
            const btnFechar = document.querySelector(".btn-fechar i");
            const overlayMenu = document.getElementById("overlay-menu");

            btnMenu.addEventListener("click", function() {
                menuMobile.classList.toggle("abrir-menu");
                overlayMenu.classList.toggle("mostrar");
            });

            btnFechar.addEventListener("click", function() {
                menuMobile.classList.toggle("abrir-menu");
                overlayMenu.classList.toggle("mostrar");
            });

            overlayMenu.addEventListener("click", function() {
                menuMobile.classList.toggle("abrir-menu");
                overlayMenu.classList.toggle("mostrar");
            });