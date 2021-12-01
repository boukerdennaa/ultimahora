export const hamburguer = () => {

const hamburguerButton = document.getElementById('hamburguer__button');
const hamburguerMenu = document.getElementById('hamburguer__menu');
const overlay = document.getElementById('overlay');

hamburguerButton.addEventListener('click', () =>  {

    hamburguerButton.classList.toggle('--active');
    hamburguerMenu.classList.toggle('--active');
    overlay.classList.toggle('--active');
});
}