function image() {
    var image = document.getElementById("image");
    if (image.src.match("images/avatar.png")) {
        document.getElementById("btn").innerHTML = "Hide!"
        image.src = "images/me.jpg"
    }
    else {
        document.getElementById("btn").innerHTML = "Reveal my face!"
        image.src = "images/avatar.png"

    }
}
