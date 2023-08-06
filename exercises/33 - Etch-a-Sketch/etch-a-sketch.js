// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// set up our canvas for drawing
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const MOVE_AMOUNT = 50;

console.log(x, y);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  console.log('HANDLING KEY');
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
    console.log(e.key);
    console.log('handling key');
  }
  // e.preventDefault();
}

// clear or shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);

  canvas.addEventListener(
    'animationend',
    () => {
      console.log('shake complete');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
