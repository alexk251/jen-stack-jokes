console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    getJokes();
}

//Get jokes from server and display on DOM
function getJokes() {
    $.ajax({
        method: 'get',
        url:'/jokes'
    }).then(function (response)){
        console.log(response)
        
        //empty DOM
        $('#outputDiv').empty();


    }
}