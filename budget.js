let total = 0;
let expenses = JSON.parse(localStorage.getItem('userData')) || [];

const userInput1 = document.getElementById('userInput1');
const userInput2 = document.getElementById('userInput2');
const userInput3 = document.getElementById('userInput3');
const userInput4 = document.getElementById('userInput4');
const date = document.getElementById('dateInput');
const totalBudget = document.getElementById('totalBudget');
const totalExpense = document.getElementById('expense');
const totalBalance = document.getElementById('balance');
const addButton = document.getElementById('addButton');
const tableBody = document.getElementById('tableBody');


addButton.addEventListener('click', function () {
  const name = userInput2.value;
  const date = dateInput.value;
  const amount = userInput3.value;
  const quantity = userInput4.value;
  const price = amount * quantity;

  let expenseObject = {
    name: name,
    date: date,
    amount: amount,
    quantity: quantity,
    price: price,
  }

  if (name !== '' && price !== '' && quantity !== '' && amount !== '' && date !== '') {
    const tableRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const dateCell = document.createElement('td');
    
    nameCell.textContent = (name + " " + "(" + (amount + "x" + quantity) + ")");
    priceCell.textContent = price;
    dateCell.textContent = date;

    const row = document.createElement('button');
    row.textContent = "Delete";
    row.style.color = 'white';
    row.style.backgroundColor = 'red';
    row.style.cursor = 'pointer';

    tableRow.appendChild(nameCell);
    tableRow.appendChild(priceCell);
    tableRow.appendChild(dateCell);
    tableRow.appendChild(row);
    tableBody.appendChild(tableRow);

    userInput2.value = '';// clear input field
    userInput3.value = '';// clear input field
    userInput4.value = '';// clear input field
  }
  else {
    alert('Please fill in all field');
  }
  expenses.push(expenseObject);
  localStorage.setItem('userDate', JSON.stringify(expenses));
  
  total += price;
  totalExpense.textContent = total;

  tableBody.addEventListener('click', (Event) => {
    if (Event.target.tagName === 'BUTTON') {
      const row = Event.target.closest('tr');
      row.remove();
    }
  });

  totalBudget.innerText = userInput1.value;
  remain = userInput1.value - total;
  totalBalance.innerText = remain;
});