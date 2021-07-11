
const text = ["Hey! Let's create your post."];
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


document.getElementById("submit").addEventListener("click", () => {
    tinyMCE.triggerSave();
    if (document.getElementById("tittle").value == "" || document.getElementById("publisher").value == "" || document.getElementById("post").value == "" || document.getElementById("descr").value == "") {
        swal("Error!", "Kindly fill all the required feilds!", "error");
    }
    else {
        const data = {
            title: document.getElementById("tittle").value,
            description:document.getElementById("descr").value,
            publisher: document.getElementById("publisher").value,
            post: document.getElementById("post").value,
        }
        const params = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data),
        }
        fetch("/post", params).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch((e) => {
            console.log(e);
        })

        swal("Done!", "Your task has been crated", "success");
        document.querySelector("form").reset();

    }
});

tinymce.init({
    selector: 'textarea',
    plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
    imagetools_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    image_list: [
        { title: 'My image 1', value: 'https://www.example.com/my1.gif' },
        { title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif' }
    ],
    file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = function () {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);

                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
        };

        input.click();
    },
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});
tinyMCE.triggerSave(true, true);
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