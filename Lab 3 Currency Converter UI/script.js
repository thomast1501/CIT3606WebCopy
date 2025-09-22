// Simple script for Lab 3 Currency Converter UI
function convert() {
	var amountEl = document.getElementById('amount');
	var currencyEl = document.getElementById('currency');
	var result = document.getElementById('result');

	var amount = parseFloat(amountEl.value);
	if (isNaN(amount)) {
		if (result) result.textContent = 'Please enter a valid numeric amount';
		else alert('Please enter a valid numeric amount');
		return;
	}

	var currency = currencyEl ? currencyEl.value.trim() : '';
	if (!currency) currency = 'pound sterling';

	var rate = 0.79;
	var converted = (amount * rate).toFixed(2);
	var message = amount + ' USD is ' + converted + ' ' + currency + '.';

	if (result) result.textContent = message;
	else alert(message);
}

