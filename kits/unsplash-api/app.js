var xhr = new XMLHttpRequest;

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
      var jsonData = xhr.responseText;
      var data = JSON.parse(jsonData);
      
      data.forEach(function (photo) {
          var photoURL = photo.urls.regular;
          var thePlace = document.getElementById("photos");
          var photographerName = photo.user.name
          var photographerURL = photo.user.links.portfolio;
          var unsplashURL = "https://unsplash.com/";
          
          thePlace.innerHTML += `<img class="each-photo" src="${photoURL}" /><p><a class="photographer" href="${photographerURL}" >${photographerName}</a>|<a class="unsplash" href="unsplashURL">Unsplash</a></p>`;
      })
  }  
};

xhr.open("GET", "https://api.unsplash.com/photos/?client_id=2e04484c9791ff456e35ea59a1b7d67efa0ae83fecf153e3f701e99426ba6979", true);
xhr.send();