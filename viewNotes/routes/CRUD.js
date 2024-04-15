const { Router } = require("express")
const controller = require("../controllers/CRUDController")

const router = Router();

router.get("/:id", controller.getStudentByID)
router.get("/", controller.getStudents)

module.exports = router;