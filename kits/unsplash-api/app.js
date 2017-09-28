var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.response;
        console.log(jsonData);
    }
};

xhr.open("GET", "https://api.unsplash.com/", true);
xhr.send();
