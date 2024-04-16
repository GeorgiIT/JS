function solve() {
  const text = document.getElementById('text').value;
  const nameConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  // Split the input text into an array of words
  const words = text.split(' ');

  let modifiedString = '';

  if (nameConvention === "Camel Case") {
    modifiedString = words.map((word, index) => index === 0 ? word.toLowerCase() 
    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  } else if (nameConvention === 'Pascal Case') {
    modifiedString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  } else {
    modifiedString = "Error!";
  }

  // Set the modified string as the text content of the result span
  result.textContent = modifiedString;
}
