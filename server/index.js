let { app } = require("./config/expressconfig");
let main = app();

//------------- ITEMS ROUTES--------------------
let { getItems } = require("./models/items/get");
let { postItem } = require("./models/items/post");
let { deleteItem } = require("./models/items/delete");

main.use("/", getItems);
main.use("/", postItem);
main.use("/", deleteItem);

//------------ ROOT REQUEST-------------------
main.get("/", (req, res) => {
    return res.json({ message: "Server is running on port 4000" })
})