
const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn')

async function fetchJokeData(){

    console.log("Fetching joke...");
    
    try{
        const resp = await fetch('https://official-joke-api.appspot.com/random_joke')
        const data = await resp.json()
        jokeEl.textContent = data.setup + " 😂 " + data.punchline;

        console.log(data);
        

    }catch(e){
        jokeEl.textContent = "Oops! Couldn't fetch a joke right now.";
        console.log(e)
    }
}

btn.addEventListener('click',fetchJokeData)