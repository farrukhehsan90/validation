const { router } = require("../../config/expressconfig");
const { updateItemById } = require('../../services/item.service');

let updateItem = router.post("/update-item", async (req, res) => {
    try {
        let { id } = req.body;
        const updateItem = await updateItemById(id, req.body);
        if (createItem) {
            return res.json({ message: "ITEM UPDATED SUCCESSFULLY", error: false, statusCode: 200, data: updateItem })
        }
        else {
            return res.json({ message: "ITEM UPDATED SUCCESSFULLY", error: false, statusCode: 200, data: [] })
        }
    } catch (error) {
        return res.json({ message: "SOMETHING WENT WRONG", error: true, statusCode: 500, data: [] })
    }
});


module.exports = { updateItem }
