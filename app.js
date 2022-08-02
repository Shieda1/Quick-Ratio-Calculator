// https://calculator.swiftutors.com/quick-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const quickRatioRadio = document.getElementById('quickRatioRadio');
const cashCashEquivalentsRadio = document.getElementById('cashCashEquivalentsRadio');
const marketableSecuritiesRadio = document.getElementById('marketableSecuritiesRadio');
const accountsReceivableRadio = document.getElementById('accountsReceivableRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let quickRatio;
let cashCashEquivalents = v1;
let marketableSecurities = v2;
let accountsReceivable = v3;
let currentLiabilities = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

quickRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash & Cash Equivalents';
  variable2.textContent = 'Marketable Securities';
  variable3.textContent = 'Accounts Receivable';
  variable4.textContent = 'Current Liabilities';
  cashCashEquivalents = v1;
  marketableSecurities = v2;
  accountsReceivable = v3;
  currentLiabilities = v4;
  result.textContent = '';
});

cashCashEquivalentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Quick Ratio';
  variable2.textContent = 'Marketable Securities';
  variable3.textContent = 'Accounts Receivable';
  variable4.textContent = 'Current Liabilities';
  quickRatio = v1;
  marketableSecurities = v2;
  accountsReceivable = v3;
  currentLiabilities = v4;
  result.textContent = '';
});

marketableSecuritiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Quick Ratio';
  variable2.textContent = 'Cash & Cash Equivalents';
  variable3.textContent = 'Accounts Receivable';
  variable4.textContent = 'Current Liabilities';
  quickRatio = v1;
  cashCashEquivalents = v2;
  accountsReceivable = v3;
  currentLiabilities = v4;
  result.textContent = '';
});

accountsReceivableRadio.addEventListener('click', function() {
  variable1.textContent = 'Quick Ratio';
  variable2.textContent = 'Cash & Cash Equivalents';
  variable3.textContent = 'Marketable Securities';
  variable4.textContent = 'Current Liabilities';
  quickRatio = v1;
  cashCashEquivalents = v2;
  marketableSecurities = v3;
  currentLiabilities = v4;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Quick Ratio';
  variable2.textContent = 'Cash & Cash Equivalents';
  variable3.textContent = 'Marketable Securities';
  variable4.textContent = 'Accounts Receivable';
  quickRatio = v1;
  cashCashEquivalents = v2;
  marketableSecurities = v3;
  accountsReceivable = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(quickRatioRadio.checked)
    result.textContent = `Quick Ratio = ${computeQuickRatio().toFixed(2)}`;

  else if(cashCashEquivalentsRadio.checked)
    result.textContent = `Cash & Cash Equivalents = ${computeCashCashEquivalents().toFixed(2)}`;

  else if(marketableSecuritiesRadio.checked)
    result.textContent = `Marketable Securities = ${computeMarketableSecurities().toFixed(2)}`;

  else if(accountsReceivableRadio.checked)
    result.textContent = `Accounts Receivable = ${computeAccountsReceivable().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
})

// calculation

function computeQuickRatio() {
  return (Number(cashCashEquivalents.value) + Number(marketableSecurities.value) + Number(accountsReceivable.value)) / Number(currentLiabilities.value);
}

function computeCashCashEquivalents() {
  return (Number(quickRatio.value) * Number(currentLiabilities.value)) - Number(marketableSecurities.value) - Number(accountsReceivable.value);
}

function computeMarketableSecurities() {
  return (Number(quickRatio.value) * Number(currentLiabilities.value)) - Number(cashCashEquivalents.value) - Number(accountsReceivable.value);
}

function computeAccountsReceivable() {
  return (Number(quickRatio.value) * Number(currentLiabilities.value)) - Number(cashCashEquivalents.value) - Number(marketableSecurities.value);
}

function computeCurrentLiabilities() {
  return (Number(cashCashEquivalents.value) + Number(marketableSecurities.value) + Number(accountsReceivable.value)) / Number(quickRatio.value);
}