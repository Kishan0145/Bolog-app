
const text = ["Welcome to Rainbow. ", "A website to publish your Blogs.", "It is developed and managed by Kishan Sharma. ", "For any query please contact! "]
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

document.querySelector(".searchButton").addEventListener("click", () => {
    const search = document.querySelector(".searchTerm").value;
    console.log(search)
    if (search) {
        location.href = `?search=${search}`;
    }
})
// addEventListener("load", () => {
//     var start = Date.now(); // The current date (in miliseconds)
//     var end = start + 1000; // 5 seconds afterwords

//     function spinWheel() {
//         start = Date.now(); // Get the date currently
//         /* Your code here */
//         if (start > end){
//             document.querySelector(".loader").style.display = "none";
//             document.querySelector(".load").style.display = "block";
//             clearInterval(timer); // If we are 5 seconds later clear interval
//         }
//     }
//     var timer = setInterval(spinWheel, 100);
      
// })