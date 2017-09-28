/// Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);

        var count = data.reduce(function (total, current) {
            return total += parseInt(current.watchers_count);
        }, 0);
        console.log(count);
    }
};

xhr.open("GET", "https://api.github.com/users/noblepaper/repos", true);
xhr.send();
