const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Define the schema
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Create the model
const Todo = mongoose.model('Todo', todoSchema);

// Export the model for use in other parts of the application
module.exports = Todo;
