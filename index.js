const fetchPoke = async (id) => {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  if (res.status === 200) {
    let data = await res.json();
    return data;
  }else {
    return await ((await fetch("https://pokeapi.co/api/v2/pokemon/1")).json())
  }
};

const form = document.querySelector("form");
const input = document.getElementById("input");

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const poke = input.value;
    if(!poke) return;
    document.getElementById('id').innerHTML = ''
    document.getElementById("nome").innerHTML = "Carregando...";
    const data = await fetchPoke(poke.toLowerCase());
    const name = data.name;
    const id = data.id;
    document.getElementById("pokemon").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    document.getElementById("pokemon").alt = 'Pokemon '+name;
    document.getElementById("nome").innerHTML = name;
    document.getElementById("id").innerHTML = id + ' - ';
    document.getElementById("tipos").innerHTML = data.types.map(type => type.type.name).join(', ');
})