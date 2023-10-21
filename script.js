const url = `https://pokeapi.co/api/v2/pokemon/`;
const content = document.querySelector('#content');
const button = document.getElementById('button');

// let pokeId = Math.floor(Math.random() * 150) + 1

button.addEventListener('click', function () {
    let urlId = Math.floor(Math.random() * 150) + 1
    let finalUrl = url+urlId;
    
    async function getData(){
        const response = await fetch(finalUrl);
        const data = await response.json();
        console.log(data)
        const Name = data.name;
        const hp = data.stats[0].base_stat;
        const image = data.sprites.other.dream_world.front_default;
        const attack = data.stats[1].base_stat;
        const defence = data.stats[2].base_stat;
        const speed = data.stats[5].base_stat;
        const type = data.types[0].type.name;
        console.log(type)
        
        content.innerHTML = `<div id="image">
        <img src="${image}" alt="Reload">

        <p id="name">${Name}</p>
    </div>
    <div id="dets">
        <div id="type">
            <h2>${type}</h2>
        </div>
        <div id="others">
            <div class="spects">
                <p>${attack}</p>
                <h3>Attack</h3>
            </div>
            <div class="spects">
                <p>${defence}</p>
                <h3>Defence</h3>
            </div>
            <div class="spects">
                <p>${speed}</p>
                <h3>Speed</h3>
            </div>
            <div class="spects">
                <p>${hp}</p>
                <h3>Hp</h3>
            </div>
        </div>
    </div>`
    }
    getData();
})