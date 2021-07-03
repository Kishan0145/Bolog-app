
const text = ["Create your account here.", "and become the member of Rainbow community "]
var char = 0;
var word = 0;
var temp;
function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
function type() {

    if (word == text.length) {
        word = 0;
    }
    if (char < text[word].length) {
        var ele = document.querySelector("#typing");
        temp = text[word];
        ele.innerHTML += temp.charAt(char);
        char++;
    }
    if (char == text[word].length) {
        char = 0;
        word++;
        ele.innerHTML = "";
        sleep(2000);
    }
    setTimeout(type, 50);
}
addEventListener('load', function () {
    type();
})

// document.getElementById("btn").addEventListener("click",()=>{
//     nam =  document.getElementById("Name").value,
//     email = document.getElementById("Email").value,
//     password = document.getElementById("password").value,
//     console.log(nam,email,password);
// })




// document.getElementById("btn").addEventListener("click", () => {
//     if (document.getElementById("Name").value == "" || document.getElementById("Email").value == "" || document.getElementById("password").value == "") {
//         swal("Error!", "Kindly fill all the required feilds!", "error");
//     }
//     else {
//         const data = {
//             name: document.getElementById("Name").value,
//             email: document.getElementById("Email").value,
//             password: document.getElementById("password").value,
//         }
//         const params = {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             },
//             body: JSON.stringify(data),
//         }
//         fetch("http://localhost:3000/users", params).then((response) => {
//             return response.json();
//         }).then((data) => {
//             console.log(data);
//         }).catch((e) => {
//             console.log(e);
//         })

//         swal("Thank you!", "You have sucessfully created your account.", "success");
//         document.querySelector("form").reset();
//     }
// });

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// document.querySelector("form").addEventListener(("submit"),()=>{
//         fetch("http://localhost:3000/users").then((response)=>{
//             return response.json();
//         }).then((data)=>{
//             console.log(data);
//         }).catch((e)=>{
//             console.log(e);
//         })
// })


addEventListener("load", () => {
    var start = Date.now(); // The current date (in miliseconds)
    var end = start + 1000; // 5 seconds afterwords
  
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