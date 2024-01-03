function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "shirleyzhu@college.harvard.edu" && password === "purpleorchid123!") {
        window.location.replace("./contact.html");
    } else {
        alert("Invalid information");
        return;
    }

}