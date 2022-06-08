import express from "express";
const router = express.Router();

// Controllers
import * as controllers from "../controllers/insumos";

router.post( "/", controllers.insertInsumo );

router.get( "/", controllers.getInsumos );

router.put( "/:id", controllers.updateInsumo );

router.delete( "/:id", controllers.deleteInsumo );

export default router;
