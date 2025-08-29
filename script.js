let btn = document.getElementById('btn');

let url = 'https://official-joke-api.appspot.com/jokes/random';

let jokes = document.getElementById('jokes')

let getData = async() =>{
    let response = await fetch(url);
    console.log(response);

    let data = await response.json();

    console.log(data);

    console.log("Joke setup:", data.setup);
    console.log("Joke punchline:", data.punchline);
    jokes.innerHTML = `❓ Question : ${data.setup} <br><br> 😂 Answer : ${data.punchline}`;
    
}


btn.addEventListener('click',getData);