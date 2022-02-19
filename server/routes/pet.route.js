const PetController = require('../controllers/pet.controller');
const API_URL = "/api/pet"
module.exports = function(app){
    app.get(API_URL, PetController.getAllPets)
    app.get(`${API_URL}/:id`, PetController.getPet)
    app.post(API_URL, PetController.createPet)
    app.put(`${API_URL}/:id`, PetController.updatePet)
    app.delete(`${API_URL}/:id`, PetController.deletePet)
}
