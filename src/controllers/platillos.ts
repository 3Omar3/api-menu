import * as db from "../db/platillos";
import Platillo from "../shames/platillo";
import path from "path"

export const insertPlatillo = async (req: any, res: any) => {
    try {
        let sampleFile: any;
        let uploadPath: string = "";

        if (req.files || Object.keys(req.files).length !== 0) {
            sampleFile = req.files.image;
            uploadPath = path.join( __dirname, '../../public', 'upload', sampleFile.name);
        }

        // Use mv() to place file on the server
        sampleFile.mv(uploadPath, (error) => {
            if (error) return res.status(500).json({error});
        })

        const { name, description, price } = JSON.parse(req.body.data);
        db.insertPlatillo(new Platillo(sampleFile.name, name, description, price));

        return res.status(200).json({ success: "platillo registrado" });
    } catch (e: any) {
        return res.status(500).json({ error: e.message });
    }
}

export const getPlatillos = async (req: any, res: any) => {
    try {
        const platillos = await db.getPlatillo();
        return res.status(200).send(platillos);
    } catch ( error ) {
        return res.status(500).json({ error });   
    }
}

export const updatePlatillo = async ( req: any, res: any ) => {
    try {
        let sampleFile: any;
        let uploadPath: string = "";

        if (req.files || Object.keys(req.files).length !== 0) {
            sampleFile = req.files.image;
            uploadPath = path.join( __dirname, '../../public', 'upload', sampleFile.name);
        }

        // Use mv() to place file on the server
        sampleFile.mv(uploadPath, (error) => {
            if (error) return res.status(500).json({error});
        })

        const { name, description, price } = JSON.parse(req.body.data);
        db.updatePlatillo( req.params.id, new Platillo( uploadPath, sampleFile.name, name, description, price ));

        return res.status(200).json({ success: "platillo actualizado" });
    } catch (e: any) {
        return res.status(500).json({ error: e.message });
    }
}

export const deleteInsumo = async ( req: any, res: any ) => {
    try {
        await db.deletePlatillo( req.params.id );
        res.status(200).json({ success: "platillo eliminado" });
    } catch ( error ) {
        return res.status(500).json({ error });  
    }
}