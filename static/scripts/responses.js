function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return callServer(input)
    }
}


var baseUrl = 'https://knowledge-bot-2aptfnllba-uc.a.run.app/'


function callServer(input){
    console.log("trying to send info \n" + input);
    localStorage.setItem("token", input);

    const request = new XMLHttpRequest();
    const url = baseUrl
    request.open("GET", url);
    request.setRequestHeader('Authorization','Bearer '+ localStorage.getItem("token"));

    console.log("sent info \n" + localStorage.getItem("token"));
    console.log("sent request to:\n" + url);
    // request.send();
    request.onload = (e) => {
        console.log("received response " + request.getAllResponseHeaders())
        console.log("received response " + request.responseText)
        console.log("received response " + request.response);
        printResponse(request.response);
        return request.response;
    }
}
