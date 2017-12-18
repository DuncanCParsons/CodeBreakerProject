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
    if (getResults(input.value))
    {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    }else
    if (parseInt(attempt.value) > 10)
    {
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    }else
    {
        setMessage("Incorrect, try again.");
    }
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

function getResults (input)
{
    var output = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    var index = 0;
    var correct = 0;
    for (var i = 0;i< 4 ;i++)
    {
        if(answer.value.substr(i,1) === input.substr(i,1))
        {
            output = output+ '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        }else
        if (answer.value.indexOf(input.substr(i,1)) > -1)
        {
            output = output+ '<span class="glyphicon glyphicon-transfer"></span>';
        }else
        {
            output = output+ '<span class="glyphicon glyphicon-remove"></span>';
        }


    }

    output = output + '</div>';

    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + output;

    if (correct === 4)
    {
        return true;
    }

    return false;
}

function showAnswer(solved)
{
    var codeElement = document.getElementById('code');
    codeElement.innerHTML = answer.value;
    if (solved)
    {
        codeElement.className += ' success';
    }else   
    {
        codeElement.className += ' failure';
    }
}

function showReplay ()
{
    document.getElementById('guessing-div').style.display = 'none';
    document.getElementById('replay-div').style.display = 'block';
    setHiddenFields();
}