const display = document.querySelector('.display');
const numerals = document.querySelectorAll('.numeral');
const opBtns = document.querySelectorAll('.operator');
const eqlBtn = document.getElementById('=');
const clearBtn = document.querySelector('#clear');

let a = '';
let b = '';
let operator = '';
let result = '';

numerals.forEach((numeral) => {
  numeral.addEventListener('click', () => {
    if (operator === '') {
      a += numeral.id;
      console.log(a);
    } else {
      b += numeral.id;
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
  a = '';
  b = '';
  operator = '';
  result = '';
});

function resolve() {
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      console.log(result);
      break;
    case '-':
      result = Number(a) - Number(b);
      console.log(result);
      break;
    case '*':
      result = Number(a) * Number(b);
      console.log(result);
      break;
    case '/':
      result = Number(a) / Number(b);
      console.log(result);
      break;    
  };
};