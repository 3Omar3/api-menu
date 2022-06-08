import express from "express";
const router = express.Router();

import * as controllers from "../controllers/platillos";

router.post( "/", controllers.insertPlatillo );

router.get( "/", controllers.getPlatillos );

export default router;
