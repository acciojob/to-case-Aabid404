function toCase(text) {
  // write your code here
	 if (str === '') {
    return '-';
  }
  return str.toLowerCase() + '-' + str.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
