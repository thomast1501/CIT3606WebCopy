// Simple script for Lab 3 Currency Converter UI

function hello() {
	var input = document.getElementById('username');
	var name = input ? input.value.trim() : '';
	if (!name) name = 'there';
	// show greeting in result div
	var result = document.getElementById('result');
	if (result) result.textContent = 'hi ' + name;
	else alert('hi ' + name);
}

function bye() {
	var result = document.getElementById('result');
	if (result) result.textContent = 'bye';
	else alert('bye');
}

function convert() {
	var amountEl = document.getElementById('amount');
	var currencyEl = document.getElementById('currency');
	var result = document.getElementById('result');

	if (!amountEl) {
		if (result) result.textContent = 'Amount input not found';
		else alert('Amount input not found');
		return;
	}

	var amount = parseFloat(amountEl.value);
	if (isNaN(amount)) {
		if (result) result.textContent = 'Please enter a valid numeric amount';
		else alert('Please enter a valid numeric amount');
		return;
	}

	var currency = currencyEl ? currencyEl.value.trim() : '';
	if (!currency) currency = 'pound sterling';

	var rate = 0.79; // example conversion rate
	var converted = (amount * rate).toFixed(2);
	var message = amount + ' USD is ' + converted + ' ' + currency + '.';

	if (result) result.textContent = message;
	else alert(message);
}

