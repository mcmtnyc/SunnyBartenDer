import { Router } from "express";
import bookRoutes from "./book.js";
import sunlightRoutes from "./sunlight.js"
import userRoutes from "./user.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the root route!"));

router.use("/", bookRoutes);
router.use("/", sunlightRoutes);
router.use("/", userRoutes);

export default router;