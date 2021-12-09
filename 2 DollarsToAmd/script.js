import { exchange } from "./helper/exchange.js";
import { myIsNaN } from "./helper/isNaN.js";

const dollar = document.querySelector('#dollar');
const dram = document.querySelector('#dram');

dollar.addEventListener('input', evt => {
    let dollarForChange = evt.target.value;

    if(myIsNaN(dollarForChange)){
        alert('Enter valid number');
        evt.target.value = '';
        dram.value = ' ';
        return;
    }

    dram.value = exchange(dollarForChange);

})