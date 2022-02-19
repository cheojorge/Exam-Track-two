const {Pets} = require('../models/pet.models')

module.exports.getAllPets = (req,res) => {
    Pets.find({}).sort({type: 1})
    .then(pet => res.json(pet))
    .catch(erro => res.json(erro))
}
module.exports.getPet = (req,res) => {
    Pets.findOne({_id: req.params.id})
    .then(pet => res.json(pet))
    .catch(err => res.json(err))
}
module.exports.createPet = (req,res) => {
    const {name,type,skill,description} = req.body;
    Pets.create({
        name,
        type,
        description,
        skill,
    })
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err))
}
module.exports.updatePet = (req,res) => {
    Pets.updateOne({_id: req.params.id},req.body,{ runValidators: true })
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err))
}

module.exports.deletePet = (req,res) => {
    Pets.deleteOne({_id: req.params.id})
    .then(pet => res.json(pet))
    .catch(err => res.json(err))
}