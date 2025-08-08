function toCase(text) {
  // Handle empty string case
  if (text === '') {
    return '-';
  }
  // Return lowercase + '-' + uppercase
  return text.toLowerCase() + '-' + text.toUpperCase();
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
