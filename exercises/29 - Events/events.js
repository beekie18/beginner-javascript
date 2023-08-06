const butts = document.querySelector('.butts');
butts.addEventListener('click', handleClick);
const coolButton = document.querySelector('.cool');
coolButton.addEventListener('click', handleClick);
butts.removeEventListener('click', handleClick);

function handleClick() {
  console.log('it got clicked!');
}
