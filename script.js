const display = document.querySelector('.display');
const numerals = document.querySelectorAll('.numeral');
const opBtns = document.querySelectorAll('.operator');
const eqlBtn = document.getElementById('=');
const clearBtn = document.querySelector('#clear');

let a = '';
let b = '';
let operator = '';
let result = '';

function resolve() {
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      display.textContent = result;
      console.log(result);
      break;
    case '-':
      result = Number(a) - Number(b);
      display.textContent = result;
      console.log(result);
      break;
    case '*':
      result = Number(a) * Number(b);
      display.textContent = result;
      console.log(result);
      break;
    case '/':
      if (Number(b) === 0) {
        alert("ERROR: Do not divide by zero");
        clear();
      } else {
        result = Number(a) / Number(b);
        display.textContent = result;
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
