var xhr = new XMLHttpRequest();

//function parsePokemon() {
//    
//}


xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
      var pokeJSON = xhr.responseText;
      var pokeData = JSON.parse(pokeJSON);
      
      var pokeArray = pokeData.objects["0"].pokemon;
      var display = document.getElementById("names");
      
      pokeArray.map(function (pokey) {
          var upperCase = pokey.name[0].toUpperCase();
          var newName = upperCase + pokey.name.substr(1);
          display.innerHTML += `<h3 class="names"> ${ newName } </h3>`;
      });      
  }  
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();

