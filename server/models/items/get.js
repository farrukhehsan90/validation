const { router } = require("../../config/expressconfig");
const { getAllItems } = require('./../../services/item.service');

let getItems = router.get("/get-items", async (req, res) => {
    try {
        const items = await getAllItems();
        if (items) {
            return res.json({ message: "items retrieved successfully", error: false, statusCode: 200, data: items })
        } else {
            return res.json({ message: "items not available", error: false, statusCode: 200, data: []})
        }
    } catch (error) {
        return res.json({ message: "something went wrong", error: true, statusCode: 500, data: [] })
    }
});

module.exports = { getItems }