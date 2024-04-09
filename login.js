const email_array = ["meiyiyan@college.harvard.edu",
    "melissa_liu@college.harvard.edu",
    "adriennechan@college.harvard.edu",
    "allychun@college.harvard.edu",
    "astickels@college.harvard.edu",
    "asong@college.harvard.edu",
    "ashleykim@collegeharvard.edu",
    "cskim@college.harvard.edu",
    "hannahgokongwei@college.harvard.edu",
    "jamgalanbaatar@college.harvard.edu",
    "jisunglee@college.harvard.edu",
    "kelseywu@college.harvard.edu",
    "elizabethli@college.harvard.edu",
    "michellesun@college.harvard.edu",
    "scai@college.harvard.edu",
    "tahuja@college.harvard.edu",
    "althealee@college.harvard.edu",
    "chelseawang@college.harvard.edu",
    "epham@college.harvard.edu",
    "emily_chan@college.harvard.edu",
    "jgurm@college.harvard.edu",
    "jenny_lu@college.harvard.edu",
    "jodie_kuo@college.harvard.edu",
    "joyho@college.harvard.edu",
    "jooeunjunelee@college.harvard.edu",
    "katielim@college.harvard.edu",
    "lxmai@college.harvard.edu",
    "michellelin@college.harvard.edu",
    "nicolelu@college.harvard.edu",
    "shirleyzhu@college.harvard.edu",
    "yukichen@college.harvard.edu",
    "yjhan@college.harvard.edu",
    "amyliu@college.harvard.edu",
    "cbli@college.harvard.edu",
    "christinahu@college.harvard.edu",
    "epeng@college.harvard.edu",
    "eyin@college.harvard.edu",
    "esthercho@college.harvard.edu",
    "gtien@college.harvard.edu",
    "kittywang@college.harvard.edu",
    "krupalikumar@college.harvard.edu",
    "kylebaek@college.harvard.edu",
    "laurenkim1@college.harvard.edu",
    "pbalachundhar@college.harvard.edu",
    "spillai@college.harvard.edu",
    "tple@college.harvard.edu"]
function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email_array.includes(email) && password === "purpleorchid123!") {
        window.location.href = "https://harvardoaasis.com/internal";
    } else {
        alert("Invalid information");
        return;
    }

}