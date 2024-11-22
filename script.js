const display = document.querySelector('.display');
const numerals = document.querySelectorAll('.numeral');
const decimal = document.querySelector('.decimal');
const opBtns = document.querySelectorAll('.operator');
const eqlBtn = document.getElementById('=');
const clearBtn = document.querySelector('#clear');
const bkBtn = document.querySelector('.backspace');
const posNegBtn = document.querySelector('.posNeg'); 

let a = '';
let b = '';
let operator = '';
let result = '';

function resolve() {
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      result = Math.round(result * 10**5) / 10**5;
      display.textContent = result;
      a = result;
      console.log(result);
      break;
    case '-':
      result = Number(a) - Number(b);
      display.textContent = result;
      result = Math.round(result * 10**5) / 10**5;
      a = result;
      console.log(result);
      break;
    case '*':
      result = Number(a) * Number(b);
      display.textContent = result;
      result = Math.round(result * 10**5) / 10**5;
      a = result;
      console.log(result);
      break;
    case '/':
      if (Number(b) === 0) {
        alert("ERROR: Do not divide by zero");
        clear();
      } else {
        result = Number(a) / Number(b);
        result = Math.round(result * 10**5) / 10**5;
        display.textContent = result;
        a = result;
        console.log(result);
      };
      break;    
  };
};

function clear() {
  a = '';
  b = '';
  operator = '';
  result = '';
  display.textContent = '';
};

function backspace() {
  if (operator === '' && b === '') {
    a = a.slice(0, -1);
    display.textContent = a;
  } else if (operator !== '' && b === '') {
    operator = '';
  } else {
    b = b.slice(0, -1);
    display.textContent = b;
  };
};

function posNeg() {
  if (operator === '' && b === '') {
    if (a.slice(0, 1) !== '-') {
      a = '-' + a;
      display.textContent = a;
    } else {
      a = a.slice(1);
      display.textContent = a;
    };
  } else {
    if (b.slice(0, 1) !== '-') {
      b = '-' + b;
      display.textContent = b;
    } else {
      b = b.slice(1);
      display.textContent = b;
    };
  }
};

numerals.forEach((numeral) => {
  numeral.addEventListener('click', () => {
    if (operator === '') {
      a += numeral.id;
      display.textContent = a;
      console.log(a);
    } else {
      b += numeral.id;
      display.textContent = b;
      console.log(b);
    };    
  });
});

decimal.addEventListener('click', () => {
  if (operator === '') {
    if (Number.isInteger(Number(a))) {
      a += decimal.id;
      display.textContent = a;
      console.log(a);
    }
  } else {
    if (Number.isInteger(Number(b))) {
      b += decimal.id;
      display.textContent = b;
      console.log(b);
    }
  };
});

opBtns.forEach((opBtn) => {
  opBtn.addEventListener('click', () => {
    if (operator === '') {
    operator = opBtn.id;
    } else {
      resolve();
      a = result;
      b = '';
      result = '';
      operator = opBtn.id;
    };
  });
})

eqlBtn.addEventListener('click', () => {
  resolve();
});

clearBtn.addEventListener('click', () => {
  clear();
});

bkBtn.addEventListener('click', () => {
  backspace();
});

posNegBtn.addEventListener('click', () => {
  posNeg();
});
