function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("conversion-type").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount!";
    return;
  }

  const USD_RATE = 0.012;
  const EUR_RATE = 0.011;

  let converted = 0;
  let resultText = "";

  switch (type) {
    case "INR-USD":
      converted = amount * USD_RATE;
      resultText = `${amount.toFixed(2)} INR = ${converted.toFixed(2)} USD`;
      break;
    case "INR-EUR":
      converted = amount * EUR_RATE;
      resultText = `${amount.toFixed(2)} INR = ${converted.toFixed(2)} EUR`;
      break;
    case "USD-INR":
      converted = amount / USD_RATE;
      resultText = `${amount.toFixed(2)} USD = ${converted.toFixed(2)} INR`;
      break;
    case "EUR-INR":
      converted = amount / EUR_RATE;
      resultText = `${amount.toFixed(2)} EUR = ${converted.toFixed(2)} INR`;
      break;
    default:
      resultText = "Invalid conversion type!";
  }

  resultDiv.innerText = resultText;
}

function resetFields() {
  document.getElementById("amount").value = "";
  document.getElementById("conversion-type").selectedIndex = 0;
  document.getElementById("result").innerText = "Converted amount will appear here";
}
