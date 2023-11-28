const pokemonDetails = document.getElementById("pokemonCard")

pokeApi.getPokemons(offset = 0, limit = 20).then((pokemons = []) => {
    const newCardHtml = pokemons.map((pokemon) => `
    <li class="pokemonLi ${pokemon.type}">
        <span class="name">${pokemon.name}</span>
        <span class="number">#${pokemon.number}</span>

        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <section class="listDetails">
            <img src="${pokemon.photo}" alt="${pokemon.name}">

            <div class="details">
                <div class="divider">
                <input type="checkbox" id="${pokemon.name}About" />
                
                <ol class="about-wrapper">
                    <label for="${pokemon.name}About">About</label>
                    <li>
                        <h3>Base Exp</h3>
                        <p class="bold">${pokemon.base} xp</p>
                    </li>
                    <li>
                        <h3>Height</h3>
                        <p class="bold">${pokemon.height} m</p>
                    </li>
                    <li>
                        <h3>Weight</h3>
                        <p class="bold">${pokemon.weight} kg</p>
                    </li>
                    <li>
                        <h3>Abilities</h3>
                        <p class="bold">${pokemon.abilities.map((abilitie) => `${abilitie}`).join(', ')}</p>
                    </li>
                </ol>
                </div>
                <div class="divider">
                <input type="checkbox" id="${pokemon.name}Base" checked />
                <ol class="base-wrapper">
                    <label for="${pokemon.name}Base">Base Stats</label>
                    <li>
                        <h3>HP</h3>
                        <p class="bold">${pokemon.bases[0]} <progress value="${pokemon.bases[0]}" max="150"></progress></p>
                    </li>
                    <li>
                        <h3>Attack</h3>
                        <p class="bold">${pokemon.bases[1]} <progress value="${pokemon.bases[1]}" max="150"></progress></p>
                    </li>
                    <li>
                        <h3>Defense</h3>
                        <p class="bold">${pokemon.bases[2]} <progress value="${pokemon.bases[2]}" max="150"></progress></p>
                    </li>
                    <li>
                        <h3>Sp. Atk</h3>
                        <p class="bold">${pokemon.bases[3]} <progress value="${pokemon.bases[3]}" max="150"></progress></p>
                    </li>
                    <li>
                        <h3>Sp. Def</h3>
                        <p class="bold">${pokemon.bases[4]} <progress value="${pokemon.bases[4]}" max="150"></progress></p>
                    </li>
                    <li>
                        <h3>Speed</h3>
                        <p class="bold">${pokemon.bases[5]} <progress value="${pokemon.bases[5]}" max="150"></progress></p>
                    </li>
                    <li>
                        <h3>Total</h3>
                        <p class="bold">${pokemon.total} <progress value="${pokemon.total}" max="1000"></progress></p>
                    </li>
                </ol>
                </div>
            </div>
        </li>
    `).join('')
    pokemonDetails.innerHTML += newCardHtml
})