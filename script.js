const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

btn.addEventListener("click", generateJoke);

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    const res = await fetch("https://icanhazdadjoke.com", config);
    // handle errors
    const data = await res.json();
    joke.innerHTML = data.joke;
}