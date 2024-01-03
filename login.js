function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "shirleyzhu@college.harvard.edu" && password === "purpleorchid123!") {
        window.location.replace("https://harvardoaasis.com/contact");
    } else {
        alert("Invalid information");
        return;
    }

}