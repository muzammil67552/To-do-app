const ToDoModel = require("../model/models");

// Controller to get all ToDos
module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.status(200).send(toDos);
  } catch (error) {
    console.error("Error fetching ToDos:", error);
    res.status(500).send("An error occurred while fetching ToDos");
  }
};

// Controller to save a new ToDo
module.exports.saveToDos = async (req, res) => {
  const { toDo } = req.body;

  try {
    const newToDo = await ToDoModel.create({ toDo });
    console.log("SaveData Successfully");
    res.status(201).send(newToDo);
  } catch (error) {
    console.error("Error saving ToDo:", error);
    res.status(500).send("An error occurred while saving the ToDo");
  }
};

module.exports.updateToDos = async (req, res) => {
    const {id} = req.params
    const {toDo} = req.body

    ToDoModel.findByIdAndUpdate(id, {toDo}).then(() =>{
        res.send("Updated Sucessffully")
    })
    .catch((err) =>{
        console.log(err)
        res.send({error: err, message:"Something Went Wrong"})
    })
}

module.exports.deleteToDos = async (req, res) => {
    const {id} = req.params
    const {toDo} = req.body

    ToDoModel.findByIdAndDelete(id, {toDo}).then(() =>{
        res.send("Delete Sucessffully")
    })
    .catch((err) =>{
        console.log(err)
        res.send({error: err, message:"Something Went Wrong"})
    })
}

