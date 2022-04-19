const { router } = require("../../config/expressconfig");
const { deleteItemById } = require('./../../services/item.service');

let deleteItem = router.post("/delete-item", async (req, res) => {
    try {
        let { id } = req.body;
        const deleteItem = await deleteItemById(id);
        if (createItem) {
            return res.json({ message: "ITEM DELETED SUCCESSFULLY", error: false, statusCode: 200, data: deleteItem })
        }
        else {
            return res.json({ message: "ITEM DELETED SUCCESSFULLY", error: false, statusCode: 200, data: [] })
        }
    } catch (error) {
        return res.json({ message: "SOMETHING WENT WRONG", error: true, statusCode: 500, data: [] })
    }
});


module.exports = { deleteItem }
