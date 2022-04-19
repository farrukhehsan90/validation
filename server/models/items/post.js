const { router } = require("../../config/expressconfig");
const { createItem } = require('./../../services/item.service');

let postItem = router.post("/post-item", async (req, res) => {
    try {
        //let { Food, id, Utensils, Toys,FoodType,quantity } = req?.body;
        //console.log(req.body)
        const createItem1 = await createItem(req.body);
        if (createItem1) {
            return res.json({ message: "ITEM POSTED SUCCESSFULLY", error: false, statusCode: 200, data: createItem })
        }
        else {
            return res.json({ message: "ITEM POSTED SUCCESSFULLY", error: false, statusCode: 200, data: [] })
        }
    } catch (error) {
        return res.json({ message: "SOMETHING WENT WRONG", error: true, statusCode: 500, data: [] })
    }
});


module.exports = { postItem }
