// import swal from 'sweetalert';
var arr = document.querySelectorAll('.input');
arr.forEach(function (item) {
        item.addEventListener("focus", function () {
                var id = item.getAttribute("id");
                if (id == "Name") {
                        document.getElementById("namehr").style.borderTop = "1.5px solid #007bff";
                }
                else if (id == "Email") {
                        document.getElementById("emailhr").style.borderTop = "1.5px solid #007bff";
                }
                else if (id == "phone") {
                        document.getElementById("phonehr").style.borderTop = "1.5px solid #007bff";
                }
                else if (id == "message") {
                        document.getElementById("messagehr").style.borderTop = "1.5px solid #007bff";
                }
        })
})
var arr = document.querySelectorAll('.input');
arr.forEach(function (item) {
        item.addEventListener("blur", function () {
                var id = item.getAttribute("id");
                if (id == "Name") {
                        document.getElementById("namehr").style.borderTop = "1px solid gray";
                }
                else if (id == "Email") {
                        document.getElementById("emailhr").style.borderTop = "1px solid gray";
                }
                else if (id == "phone") {
                        document.getElementById("phonehr").style.borderTop = "1px solid gray";
                }
                else if (id == "message") {
                        document.getElementById("messagehr").style.borderTop = "1px solid gray";
                }
        })
})

text = "Have Question? I Have Answer. "
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

document.getElementById("btn").addEventListener("click",() => {
        // alert("yes")
        if (document.getElementById("Name").value == "" || document.getElementById("Email").value == "" || document.getElementById("message").value == "") {
                swal("Error!", "Kindly fill all the required feilds!", "error");
        }
        else {
                const data = {
                        name: document.getElementById("Name").value,
                        email: document.getElementById("Email").value,
                        phone: document.getElementById("phone").value,
                        message: document.getElementById("message").value,
                }
                const params = {
                        method: "POST",
                        headers: {
                                "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify(data),
                }
                fetch("/contact", params).then((response) => {
                        return response.json();
                }).then((data) => {
                        console.log(data);
                }).catch((e) => {
                        console.log(e);
                })

                swal("Thank you!", "Your response has been submitted", "success");
                document.querySelector("form").reset();

        }
});

addEventListener("load", () => {
        var start = Date.now(); // The current date (in miliseconds)
        var end = start + 500; 
    
        function spinWheel() {
            start = Date.now(); // Get the date currently
            /* Your code here */
            if (start > end){
                document.querySelector(".loader").style.display = "none";
                document.querySelector(".load").style.display = "block";
                clearInterval(timer); // If we are 5 seconds later clear interval
            }
        }
        var timer = setInterval(spinWheel, 100);
          
    })

