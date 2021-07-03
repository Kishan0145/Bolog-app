text = "This Is What I Do.  "
char = 0;
function sleep(miliseconds) {
        let date = new Date();
        let cur = date.getTime();
        while (cur + miliseconds >= new Date().getTime()) {
        }
}

function type() {
        if (char < text.length) {
                var ele = document.querySelector('#typing');
                ele.innerHTML += text.charAt(char);
                char++;
        }
        if (char == text.length) {
                char = 0;
                ele.innerHTML = "";
                sleep(2000);
        }
        setTimeout(type, 50);
}

addEventListener("load", function () {
        type();
})
addEventListener("load", () => {
        var start = Date.now(); // The current date (in miliseconds)
        var end = start + 1000; // 5 seconds afterwords

        function spinWheel() {
                start = Date.now(); // Get the date currently
                /* Your code here */
                if (start > end) {
                        document.querySelector(".loader").style.display = "none";
                        document.querySelector(".load").style.display = "block";
                        clearInterval(timer); // If we are 5 seconds later clear interval
                }
        }
        var timer = setInterval(spinWheel, 100);

})