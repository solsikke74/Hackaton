document.getElementById("myButton").addEventListener("click", toggleText);

function toggleText() {
    var text = document.getElementById("myText");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}