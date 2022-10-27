var modal = document.querySelector(".modal");

var btn = document.querySelector(".banner .button");

var closeBtn = document.querySelector(".close");

btn.onclick = function() {
    modal.classList.add("modal-show");
    document.getElementById("input-name").focus();
}

closeBtn.onclick = function() {
    modal.classList.remove("modal-show");
    btn.focus();
}

window.addEventListener("click", function(event) {
    if (event.target == modal && modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        btn.focus();
    }
});

window.addEventListener("keydown", function(event) {
    if (event.code === "Escape" && modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        btn.focus();
    }
});