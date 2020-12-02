var div = document.getElementById('slider');

for (let index = 1; index <= numberOfImages; index++) {
    addImage(index + ".jpg");
}


function addImage(src) {
    div.innerHTML += '<section>' + '<img src="' + src + '" />' + '</section>';
}; 