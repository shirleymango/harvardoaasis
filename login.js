function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "shirleyzhu@college.harvard.edu" && password === "purpleorchid123!") {
        window.location.href = "http://www.w3schools.com";
    } else {
        alert("Invalid information");
        return;
    }

}