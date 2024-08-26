function isPalindrome(x) {
    // Convert to string and compare with its reverse
    const numStr = x.toString();
    return numStr === numStr.split('').reverse().join('');
}

function checkPalindrome() {
    // Get the input value
    const input = document.getElementById('numberInput').value;
    
    // Convert input to number
    const num = parseInt(input);
    
    // Check if input is a valid number
    if (isNaN(num)) {
        alert('Please enter a valid number');
        return;
    }
    
    // Check if it's a palindrome
    const result = isPalindrome(num);
    
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result ? 
        `${num} is a palindrome!` : 
        `${num} is not a palindrome.`;
}