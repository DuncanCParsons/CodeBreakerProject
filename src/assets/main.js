let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    console.log(attempt.value);
    if (attempt.value === '' && answer.value === '')
    {
        setHiddenFields();
    }

    if (!validateInput(input.value))
    {
        return false;
    }

    attempt.value++;
    
}

function setHiddenFields() {
    var number = Math.floor(Math.random() * 10000).toString();
    number = '0000' + number;
    if (number.length > 4)
    {
        number = number.substring(number.length - 4);
    }
    answer.value = number;
    attempt.value = 0;
    console.log(number);
}

function setMessage (message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput (input)
{
    if (input === undefined || input === null || input.length !== 4)
    {
        setMessage('Guesses must be exactly 4 characters long.')
        return false;
    }

    return true;
}