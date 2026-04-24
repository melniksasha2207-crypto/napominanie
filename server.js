const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let reminders = [];

// получить все
app.get("/reminders", (req, res) => {
    res.json(reminders);
});

// добавить
app.post("/reminders", (req, res) => {
    const reminder = {
        id: Date.now(),
        text: req.body.text,
        time: req.body.time
    };

    reminders.push(reminder);
    res.json(reminder);
});

// удалить
app.delete("/reminders/:id", (req, res) => {
    reminders = reminders.filter(r => r.id != req.params.id);
    res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));