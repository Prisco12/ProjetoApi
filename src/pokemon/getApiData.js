import { readFile, writeFile } from "fs/promises";

class GetPokes {
    async create () {
        const pokeItens = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
        
        
        pokeItens.json().then(item => {
            writeFile('pokeUrlData.json',JSON.stringify(item.results, null, 2))
        })
            
    }

    async fetchPokemons () {
        const pokesListUrl = JSON.parse(await readFile("pokeUrlData.json", "utf-8"))

        const infoPokes = pokesListUrl.map(async (pokemon) => {

            let url = await pokemon.url
            const infos = await fetch(url)
            const result = await infos.json()

            const pokeStat = result.stats.map(statsAtual => {
                return {    
                    statName: statsAtual.stat.name,
                    value: statsAtual.base_stat
                }
            })

            const pokeTypes = result.types.map(typesIn => {
                return typesIn.type.name
            })
            
            const PokeData = {
                name: result.forms[0].name,
                dex: result.game_indices[9].game_index,
                version: result.game_indices[9].version.name,
                height: result.height,
                weight: result.weight,
                stats: pokeStat,
                type: pokeTypes
            }

            return PokeData

        })

        function randomPokes(poke) {
            const i = Math.floor(Math.random() * poke.length - 4)
            const result = poke.slice(i, (i + 4))
            return result
        } 

        const pokeListFinal = await Promise.all(infoPokes)

        console.log(randomPokes(pokeListFinal))

        writeFile('pokedex.json', JSON.stringify(pokeListFinal, null, 2))
    }
}

async function main() {
    const pokemons = new GetPokes()
    //pokemons.create()
    //pokemons.fetchPokemons()


    const test = await fetch('https://pokeapi.co/api/v2/pokemon/1/')

    test.json().then(item => {
        writeFile('bulbasaurApi.json',JSON.stringify(item, null, 2))
    })

    console.log(test)
}

main()