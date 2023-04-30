function dropdown() {

    const dropdowns = document.querySelectorAll('.results__dropdowns__item');

    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.results__dropdowns__item__list');
        const title = dropdown.querySelector('.results__dropdowns__item__head--title');
        const sign = dropdown.querySelector('.results__dropdowns__item__head--sign');
        const head = dropdown.querySelector('.results__dropdowns__item__head');

        head.addEventListener("click", () => {
            menu.classList.toggle("dropdown");
            title.classList.toggle("color-title");
            sign.classList.toggle("sign-change");
        });
    });
}


export default dropdown;