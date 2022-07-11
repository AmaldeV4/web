function image() {
    var image = document.getElementById('me');
            if (image.src.match("images/avatar.png")) {
                document.getElementById("amal").innerText = "AMALDEV"
                document.getElementById("amal").style.color = "Red"
                document.getElementById("btn").innerText = "---Hide!---";
                document.getElementById("btn").style.color = "Red"
                image.src = "images/me.jpg";
            }
            else {
                document.getElementById("amal").innerText = "User?"
                document.getElementById("amal").style.color = "Blue"
                image.src = "images/avatar.png";
                document.getElementById("btn").innerText = "Reveal Face";
                document.getElementById("btn").style.color = "Blue"
            }

}