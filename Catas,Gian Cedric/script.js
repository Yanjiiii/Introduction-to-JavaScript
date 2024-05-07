document.getElementById("changeButton").addEventListener("click", function() {
    var image = document.getElementById("image");

    if (image.src.includes("smiley.png")) {
        image.src = "sad.jpg";
    } else {
        image.src = "smiley.png";
    }
});
