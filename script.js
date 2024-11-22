const display = document.querySelector('.display');
const numerals = document.querySelectorAll('.numeral');
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

const opBtns = document.querySelectorAll('.operator');
opBtns.forEach((opBtn) => {
  opBtn.addEventListener('click', () => {
    operator = opBtn.id;
  });
})

const eqlBtn = document.getElementById('=');
eqlBtn.addEventListener('click', () => {
  resolve();
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  a = '';
  b = '';
  operator = '';
  result = '';
});

let a = '';
let b = '';
let operator = '';
let result = '';

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