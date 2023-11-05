const url = "https://api.adviceslip.com/advice";
const adviceNum = document.querySelector("#advice-number");
const advice = document.querySelector("#advice-quote");
const btn = document.querySelector("button");

async function getData() {
  try {
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    console.log("success");
    adviceNum.innerText = data.slip.id;
    advice.innerText = data.slip.advice;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

btn.addEventListener("click", getData);
