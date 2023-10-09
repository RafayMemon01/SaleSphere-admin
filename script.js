console.log("JS Working");

const email = "rafayrashid200611@gmail.com";
const password = "rafaymemon";

const login = (e) => {
    e.preventDefault(); // Corrected preventDefault()

    let userInputEmail = document.getElementById("email").value;
    console.log("Email " + userInputEmail);

    let userInputPassword = document.getElementById("password").value;
    console.log("Password " + userInputPassword);

    if (userInputEmail !== email || userInputPassword !== password) {
        console.log("Error");
    } else {
        console.log("Correct Email and Password");
        window.location.href = "./Admin-Dashboard/index.html"
    }
};
