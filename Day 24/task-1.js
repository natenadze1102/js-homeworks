/* Task 1
On the following text we should highlight bolded words.
1. When mouse enters `#textBox` highlight bolded words by green color and change font size to make it bigger
2. When mouse will out make them look as it was before
 */

const textBox = document.querySelector('#textBox');

function addSomeClass(e) {
  document
    .querySelectorAll('strong')
    .forEach((elem) => elem.classList.add('change'));
}

function removeSomeClass(e) {
  document
    .querySelectorAll('strong')
    .forEach((elem) => elem.classList.remove('change'));
}

textBox.addEventListener('mouseover', addSomeClass);
textBox.addEventListener('mouseout', removeSomeClass);
