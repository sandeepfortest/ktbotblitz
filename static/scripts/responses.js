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
    // request.setRequestHeader('Authorization','Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImEzYmRiZmRlZGUzYmFiYjI2NTFhZmNhMjY3OGRkZThjMGIzNWRmNzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5MDMzNDI0OTE0MzkzNzM3MTE2IiwiaGQiOiJzYWJyZS5jb20iLCJlbWFpbCI6InNhbmRlZXBrdW1hci5qQHNhYnJlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiX1VFYU1TN2U5X1I1R3I5VDQwRks1dyIsIm5iZiI6MTY5MDA2OTA5NCwiaWF0IjoxNjkwMDY5Mzk0LCJleHAiOjE2OTAwNzI5OTQsImp0aSI6ImU1MWEzZWNmNzA3MDQ0MWI2NzIzZmQ2ZDFmYTYzMmNmMjMzZjg0MDMifQ.jLo2NUdNoq2JHJ9uJcdwSqCSYAQBY9UeY6zl_IEXXSD0Uynojkw5pWPiL3A7n5rbPagKnhHsE-24HFQKQCDcx7eGW9aXT_w7XkQR70OHnX6Y_30IQkc6e3Db_ujlR5M9LrzpKolpGyekFRkR__S09EJUae32NzgfDJ58fsx3P2KPhy4F79XdmM0HjBVda618mHuFfSu7byprwVQhusexFyPKN14yiyEYHZPyDduomCzgtwxZrqdkPWGR0JOM4DdyGRZPz_SQ26FOtsgxV0UDtDr7lIJ_2OHnOWLTysf-GcnRpPl5YWRjPcAv_1vdbAmQnA5e0i2e6bvvQXlsxmDzpQ');

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