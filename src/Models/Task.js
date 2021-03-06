const mongoose = require('../Database/Connections/Mongodb');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String
    },
    user: {
        type: Number,
        select: false
    }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;