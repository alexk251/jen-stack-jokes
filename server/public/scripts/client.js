console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click',postJokes)

    getJokes();
}
//post joke function
function postJokes() {
    //grab variables from dom
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    }
    // ajax post method to server 
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke
    }).then (response => {
        console.log(response);
    //then refresh the dom with new info in server
        getJokes();
    });



}

//Get jokes from server and display on DOM
function getJokes() {
    $.ajax({
        method: 'get',
        url:'/jokes'
    }).then(function (response) {
        console.log(response)

        //empty DOM
        $('#outputDiv').empty();

        //append DOM
        for (let joke of response) {
        $('#outputDiv').append(`
        <p><b>Joke by:</b>${joke.whoseJoke} <b>Question:</b>${joke.jokeQuestion} <b>PunchLine:</b>${joke.punchLine}</p>
        `);
        }


    })
}