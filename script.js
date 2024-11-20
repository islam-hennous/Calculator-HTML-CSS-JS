let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateResult();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateResult();
}

function clearResult() {
  currentInput = '';
  updateResult();
}

function calculateResult() {
  try {
    // تحويل "×" و"÷" إلى "*" و"/" لحسابها
    const sanitizedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
    currentInput = eval(sanitizedInput).toString();
    updateResult();
  } catch {
    currentInput = 'خطأ';
    updateResult();
  }
}

function updateResult() {
  document.getElementById('result').value = currentInput;
}
