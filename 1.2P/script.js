function checkPalindrome() {
    const text = document.getElementById("textInput").value;
    const reversed = text.split('').reverse().join('');
    const isPalindrome = text === reversed;
    
    document.getElementById("result").textContent = 
        isPalindrome ? "Palindrome" : "Not a Palindrome";
}