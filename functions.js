/*First, i declare three variables, each variable stores an array of strings. I will use
these strings later to generate the random message in three parts */ 
const firstPart = ["Hello", "Goodbye", "Farewell", "Welcome", "Hi", "Bye", "Come in"];
const secondPart = ["Stranger", "My Friend", "Traveler", "You There", "Mister", "Miss"]
const thirdPart = ["Have a nice day", "Keep on Coding", "Have a nice trip", "Take care on the road", 'May the Force be With You'];

/*I declare two variables that get two HTML elements (the button element and the p element
where the message will be displayed)*/
const button = document.getElementById("button");
const output = document.getElementById("message");

/*I add a function that takes an array for parameter and returns the string located
at a random index generated in the "index" variable */
const randomPart = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

/*I add a function that generates the random message calling the randomPart() function three
times and passing in each of the three arrays as arguments*/
const getMessage = () => {
    output.innerHTML = `${randomPart(firstPart)} ${randomPart(secondPart)}! ${randomPart(thirdPart)}...`;
}
//Added a eventListener to the Button, so when we click it, it generates the message.
button.addEventListener("click", getMessage);

