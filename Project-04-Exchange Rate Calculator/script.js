
// Fetch DOM elements

const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update api
function calculate () {
        const currencyOneCode = currencyOne.value;
        const currencyTwoCode = currencyTwo.value;

        fetch(`https://v6.exchangerate-api.com/v6/005efc896281b95569b822e4/pair/${currencyOneCode}/${currencyTwoCode}`)

                .then( res => res.json())
                .then(data => { const conversionRate = data.conversion_rate
                
                rate.innerText = `1 ${currencyOneCode} =  ${conversionRate} ${currencyTwoCode}`;
                amountTwo.value = (amountOne.value * conversionRate).toFixed(2);
                });
        };
// Add event listeners
// Recalculate when amount or currency is changed

currencyOne.addEventListener ('change', calculate);
amountOne.addEventListener ('input', calculate);

currencyTwo.addEventListener ('change', calculate);
amountTwo.addEventListener ('input', calculate);

//swap event listener

swap.addEventListener('click', () => {

        const temp = currencyOne.value;
        currencyOne.value = currencyTwo.value;
        currencyTwo.value = temp;

        calculate ();
})

//Call functions
calculate ();