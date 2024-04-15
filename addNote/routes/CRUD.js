const { Router } = require("express")
const controller = require("../controllers/CRUDController")

const router = Router();

router.post("/", controller.addStudent)

module.exports = router;