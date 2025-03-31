const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');



for (let select of dropdowns) {
  for (let Currcode in countryList) {
    let newOption = document.createElement('option');
    newOption.innerText = Currcode;
    newOption.value = Currcode;
    if (select.name === 'from' && Currcode === 'USD') {
      newOption.selected = 'selected';
    } else if (select.name === 'to' && Currcode === 'INR') {
      newOption.selected = 'selected';
    }
    select.append(newOption);
  }
  select.addEventListener('change', (ent) => {
    updateFlag(ent.target);
  });
}



const updateFlag = (element) => {
  let Currcode = element.value;
  let countryCode = countryList[Currcode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  // console.log(countryCode);
  let img = element.parentElement.querySelector('img');
  img.src = newSrc;
}


const updateExchangeRate = async () => {
  let amount = document.querySelector('.amount input');
  let amtVal = amount.value;
  if (amtVal === '' || amtVal < 1) {
    amtVal = 1;
    amount.value = '1';
  }
  // console.log(amtVal);
  const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let exchangeR = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  // console.log(exchangeR);

  let finalAmount = amtVal * exchangeR;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};


btn.addEventListener('click', async (ent) => {
  ent.preventDefault();
  updateExchangeRate();
});

window.addEventListener('load', () => {
  updateExchangeRate();
});