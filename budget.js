const userInput1 = document.getElementById('userInput1');
const userInput2 = document.getElementById('userInput2');
const userInput3 = document.getElementById('userInput3');
const userInput4 = document.getElementById('userInput4');
const expense = document.getElementById('expense');
const totalBudget = document.getElementById('totalBudget');
const balance = document.getElementById('balance');
const addButton = document.getElementById('addButton');
const tableBody = document.getElementById('tableBody');

let expenseArray = [];
addButton.addEventListener('click', function () {
  const name = userInput2.value;
  const amount = userInput3.value;
  const quantity = userInput4.value;
  const price = amount * quantity;
  let expenseObject = {
    name: name,
    price: price,
    quantity: quantity,
    amount: amount
  }
  expenseArray.push(expenseObject);
  localStorage.setItem('userData', JSON.stringify(expenseArray));

  if (name !== '' && price !== '' && quantity !== '' && amount !== '') {
    const tableRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const row = document.createElement('button');

    nameCell.textContent = (name + " " + (amount + "x" + quantity));
    priceCell.textContent = price;

    tableRow.appendChild(nameCell);
    tableRow.appendChild(priceCell);
    tableRow.appendChild(row);
    tableBody.appendChild(tableRow);

    userInput2.value = '';// clear input field
    userInput3.value = '';// clear input field
    userInput4.value = '';// clear input field
  }
  else {
    alert('Please fill in all field');
  }

  tableBody.addEventListener('click', (Event) => {
    if (Event.target.tagName === 'BUTTON') {
      const row = Event.target.closest('tr');
      row.remove();
    }
  });

  let expense = 0;
  const totalExpense = document.getElementById("expense");
  expense += parseInt(price);
  totalExpense.textContent = expense;

  totalBudget.innerText = userInput1.value;
  balance.innerText = totalBudget - expense;
});