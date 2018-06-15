var pokemons = []
var xhr = new XMLHttpRequest()
function parsePokemon() {

}
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        var jsData = JSON.parse(this.responseText)
        var ul = document.createElement("ul")
        document.body.appendChild(ul)
        pokemons = jsData.objects[0].pokemon
        for (let pokemon of pokemons) {
            var li = document.createElement("li")
            li.innerHTML = (pokemon.name)
            ul.appendChild(li)
        }
    }
}
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()