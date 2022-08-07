const AtualizandoPokemon = async (req, res) => {

    let pokemon = require('../../models/Pokemon');
    const id = req.params.id;
    const { name, type, hp, attack, defense, specialAttack, specialDefense, speed } = req.body;

    const id_pokemon = await pokemon.findByPk(id);

    await pokemon.update({
        name: name || id_pokemon.name,
        type: type || id_pokemon.type,
        hp: hp || id_pokemon.hp,
        attack: attack || id_pokemon.attack,
        defense: defense || id_pokemon.defense,
        specialAttack: specialAttack || id_pokemon.specialAttack,
        specialDefense: specialDefense || id_pokemon.specialDefense,
        speed: speed || id_pokemon.speed
    }, {where: {id: id}});

    const novoPokemon = await pokemon.findByPk(id);
    return res.json({ message: 'Novo Pokémon: ', pokemon: novoPokemon});
};

module.exports = AtualizandoPokemon;