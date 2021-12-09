import { getDataFromLocaleStorage } from "./helper/getDataFromLocaleStorage.js";
import { setDataToLocaleStorage } from "./helper/setDataFromLocaleStorage.js";

const decrase = document.querySelector('.decrase');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const count = document.querySelector('.count');
console.log(localStorage)
function render(counter){

    if(counter === false){
        count.innerText = 0; //I specially wrote it here for controlling HTML only with JS
        setDataToLocaleStorage('CurrentCountNumber', count.innerText);
        return;
    }

    count.innerText = counter;
}

let currentCount = +getDataFromLocaleStorage('CurrentCountNumber');

decrase.addEventListener('click', () => {
    currentCount <= 0 ? currentCount = 0 : currentCount -= 1;
    setDataToLocaleStorage('CurrentCountNumber', currentCount);
    render(currentCount);
})

increase.addEventListener('click', () => {
    currentCount += 1;
    setDataToLocaleStorage('CurrentCountNumber', currentCount);
    render(currentCount);
})

reset.addEventListener('click', () => {
    currentCount = 0;
    setDataToLocaleStorage('CurrentCountNumber', currentCount);
    render(currentCount);
})

let counter = getDataFromLocaleStorage('CurrentCountNumber')

render(counter);