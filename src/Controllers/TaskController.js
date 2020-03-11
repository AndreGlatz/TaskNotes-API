const Task = require('../Models/Task');

// INDEX, SHOW, STORE, UPDATE, DESTROY
module.exports = {
    async show(req, res) {
        try {
            const Tasks = await Task.find().where('id').limit(10);
            res.json({ Tasks });
        } catch (e) {
            console.log(e);
            res.status(500).json({ error: { message: "Server error", code: 5 } });
        }
    },

    async store(req, res) {
        try {
            var { description, userId } = req.body;

            const created = await Task.create({
                description,
                userId
            });

            res.json({ success: true, created });

        } catch (e) {
            return res.status(500).json({ error: { message: "Server error", code: 8 } });
        }
    },

    async update(req, res) {
        try {
            const { userId, description } = req.body;

            const updated = await Task.updateOne({ user: userId }, {
                description
            });

            res.json({ success: true, updated });


        } catch (e) {

            return res.status(500).json({ error: { message: "Server error", code: 9 } });

        }
    }
}