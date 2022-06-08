import * as db from "../db/insumos";
import Insumo from "../shames/insumo";

export const insertInsumo = async ( req: any, res: any ) => {
    try {
        const { name, measure, amount } = req.body;
        await db.insertInsumo( new Insumo( name, measure, amount ) );
        return res.status(200).json({ success: "insumo registrado"});
    } catch ( e: any ) {
        return res.status(500).json({ error: e.message });   
    }
}

export const getInsumos = async ( req: any, res: any ) => {
    try {
        const insumos = await db.getInsumos();
        return res.status(200).send(insumos);
    } catch ( error ) {
        return res.status(500).json({ error });   
    }
}

export const updateInsumo = async ( req: any, res: any ) => {
    try {
        const { name, measure, amount } = req.body;
        await db.updateInsumo( req.params.id, new Insumo( name, measure, amount ) );
        res.status(200).json({ success: "insumo actualizado" });
    } catch ( e: any ) {
        return res.status(500).json({ error: e.message });   
    }
}

export const deleteInsumo = async ( req: any, res: any ) => {
    try {
        await db.deleteInsumo( req.params.id );
        res.status(200).json({ success: "insumo eliminado" });
    } catch ( error ) {
        return res.status(500).json({ error });  
    }
}