
document.querySelector(".container").addEventListener("click", () => {
    if (document.getElementById("check").checked == true) {
        document.querySelector(".navbar").style.height = "350px";
        let val = document.querySelectorAll('.liitems')
        Array.from(val).forEach(function (item) {
            item.style.display = "block";
        })
    }
    else {
        document.querySelector(".navbar").style.height = 0;
        let val = document.querySelectorAll('.liitems')
        Array.from(val).forEach(function (item) {
            item.style.display = "none";
        })
        document.querySelector('.liitems').style.display = 'block'
    }
});