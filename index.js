// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//   .then(response => {
//     if(!response.ok){
//       throw new Error("Could not fetch resource");
//     }
//     return response.json()
//   })
//   .then(data => console.log(data.id))
//   .catch(error => console.error(error));
//

//DOM Stuff
const displayName = document.getElementById("displayName");
const displayName2 = document.getElementById("name2");
const sprite = document.getElementById("sprite");
const desc = document.getElementById("desc");

//Audio Stuff
var audio = new Audio('media/pallet.mp3')
audio.volume = 0.03
audio.loop = true
audio.play()

// Main API Call
async function fetchData(){
  try{
    let num = Math.floor((Math.random() * 10))
    const pokemonName = document.getElementById("pokemon_name").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const response_desc = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);

    if(!response.ok || !response_desc.ok){
      displayName.innerHTML = "Pokemon not Found (?)"
      sprite.src = "https://projectpokemon.org/home/uploads/monthly_2017_07/missingno.png.4bc4f1920385390a41f267dd8f15b2ed.png"
      name2.innerHTML = ""
      desc.innerHTML = ""
      throw new Error("Could not fetch resource")
    }

    const data = await response.json();
    const dataDesc = await response_desc.json();
    //Show name
    displayName.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    sprite.src = data.sprites.front_default
    name2.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    desc.innerHTML = dataDesc.flavor_text_entries[num].flavor_text;


  } catch(error){
     console.error(error)
  }
}
