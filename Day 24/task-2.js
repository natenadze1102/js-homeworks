/* Create image randomizer program )

1. Create array of different img links (min length 5).
2. Create `Next image` button.
3. Create tag image to display images.
4. When you click button it should change image randomly.
5. On bottom of the image we should display length of images (from array) inside p tag.

Create elements as you like from js or hardcoded Html.
Links can be from Internet or from local machine. */

const images = [
  'assets/images/1.jpg',
  'assets/images/2.jpg',
  'assets/images/3.jpg',
  'assets/images/4.jpg',
  'assets/images/5.jpg',
];

const btn = document.querySelector('.next');
const image = document.createElement('img');
const p = document.createElement('p');

p.style.fontSize = 20 + 'px';

function randomizer() {
  return Math.floor(Math.random() * 4);
}
//display image length (Width)
function changeImage() {
  image.src = `${images[randomizer()]}`;
  document.body.appendChild(image);
  document.body.appendChild(p);
  image.addEventListener('load', () => {
    p.innerHTML = `${image.getBoundingClientRect().width} px`;
  });
}

btn.addEventListener('click', changeImage);
