const firstPart = ["Hello", "Goodbye", "Farewell", "Welcome", "Hi", "Bye", "Come in"];
const secondPart = ["Stranger", "My Friend", "Traveler", "You There", "Mister", "Miss"]
const thirdPart = ["Have a nice day", "Have a sit", "Have a nice trip", "Take care on the road"];

const button = document.getElementById("button");
const output = document.getElementById("message");

const randomPart = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const getMessage = () => {
    output.innerHTML = randomPart(firstPart);
}

button.addEventListener("click", getMessage);

