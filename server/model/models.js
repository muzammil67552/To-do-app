const mongoose = require("mongoose");

// Define the schema for the ToDo model
const modelsSchema = new mongoose.Schema({
    toDo: {
        type: String,
        required: true,
    }
});

// Export the model (collection name: "ToDos")
module.exports = mongoose.model("ToDos", modelsSchema);
