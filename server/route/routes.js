const { Router } = require("express");
const { saveToDos, getToDos, updateToDos, deleteToDos } = require("../controller/controllers");
const router = Router();

// Define routes
router.get('/get', getToDos); // API to get all ToDos
router.post('/save', saveToDos); // API to save a new ToDo
router.put('/update/:id', updateToDos); // API to update a ToDo by ID
router.delete('/delete/:id', deleteToDos); // API to delete a ToDo by ID

module.exports = router;
