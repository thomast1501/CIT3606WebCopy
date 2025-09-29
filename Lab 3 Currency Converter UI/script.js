function convert() {
  var usd = document.getElementById("usd").value;

  if (usd === "" || isNaN(usd)) {
    alert("Please enter a valid number in USD field");
    return;
  }

  var rate = .75; 
  var ecd = (usd * rate).toFixed(2);

  document.getElementById("ecd").value = ecd;
}

