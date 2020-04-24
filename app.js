const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const body_parser = require('body-parser');

const material_controller = require('./material_controller')

app.use(body_parser.json());    // req.body.name

app.use(body_parser.urlencoded({
    extended: true
}));   //material/id

app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/materials

// GET /index.html
// --> /public/index.html
app.use("/", express.static("public"));

// RESTful API
// CRUD OPERATIONS

// CREATE
app.post("/api/material", material_controller.api_post_material);

// READ
app.get("/api/materials", material_controller.api_get_materials);

// UPDATE
app.put("/api/material/:id", material_controller.api_put_material);

// DELETE
app.delete("/api/material/:id", material_controller.api_delete_material);

const database_uri = "mongodb+srv://server:5sOKT2BKERALtuc8@cluster0-vomop.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 10000
}).then(() => {
    console.log("Database connected");
    app.listen(port);
}).catch((err) => {
    console.log(err);
});
