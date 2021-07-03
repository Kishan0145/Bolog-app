console.log("home.js");
document.querySelector('.container').addEventListener("click", function () {
    if (document.getElementById("check").checked == true) {
        document.getElementById("menu").style.border = "1px solid #007bff"
        let val = document.querySelectorAll('.liitems')
        Array.from(val).forEach(function (item) {
            item.style.display = "block";
        })
    }
    else {
        let val = document.querySelectorAll('.liitems')
        document.getElementById("menu").style.border = "1px solid black"
        Array.from(val).forEach(function (item) {
            item.style.display = "none";
        })
        document.querySelector('.liitems').style.display = 'block'
    }
})
