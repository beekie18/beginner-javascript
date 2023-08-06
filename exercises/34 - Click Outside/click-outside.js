function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}"
    alt="${name}" />
    <p>${desc}</p>
  `;

  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);

modalOuter.addEventListener('click', (event) => {
  console.log(event);
});
