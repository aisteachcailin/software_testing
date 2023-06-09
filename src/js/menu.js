function dropdown() {

    const accordion = document.querySelectorAll('.results__dropdowns__item')
    const firstDrop = accordion[0].querySelector('.results__dropdowns__item__list')
    firstDrop.style.height = firstDrop.offsetHeight + 'px'

    accordion.forEach(el => {
      el.addEventListener('click', () => {
        const dropContent = el.querySelector('.results__dropdowns__item__list')
  
        el.classList.toggle('is-open')
        slideToggle(dropContent)
  
      })
    })
  }
  
  function slideToggle (element) {
    const height = element.offsetHeight;
    const targetHeight = height === 0 ? element.scrollHeight : 0;
  
    element.style.height = targetHeight + 'px';
}

export default dropdown;