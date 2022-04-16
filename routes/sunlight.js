import { Router } from "express"
import * as controllers from "../controllers/sunlight.js"

const router = Router();

router.get("/sunlights", controllers.getSunlights)
router.get("/sunlights/:id", controllers.getSunlightById)
router.get("/sunlights/city/:cityName", controllers.getSunlightByCity)

export default router;