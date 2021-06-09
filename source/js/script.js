let select = function () {
  let selectHeader = document.querySelectorAll('.language__header');
  let selectItem = document.querySelectorAll('.language__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToogle)

  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)

  });

  function selectToogle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerHTML,
      select = this.closest('.language')
      currentText = select.querySelector('.language__current');
    currentText.innerHTML = text;
    select.classList.remove('is-active')
  }
};

select();

