import getConnection from "./connection";
import Platillo from "../shames/platillo";

// validation when the code was not found
const validateConsult = (res: any, msg = "") => {
    if (res == 0) throw new Error(msg);
};

const consult = async (sql: string, ...data: any) => {
    try {
      const conn = await getConnection();
      const res = await conn.query(sql, [...data]);
      return res;
    } catch (e) {
      throw e;
    }
};

// insert platillo
export const insertPlatillo = async ( data: Platillo ) => {
    const res = await consult("INSERT INTO platillo SET ?", data);
    validateConsult(res.affectedRows, "Error el registrar platillo");
}

// get platillo
export const getPlatillo = async () => {
  return await consult("SELECT * FROM platillo");
}

// update platillo
export const updatePlatillo = async ( id: number, data: Platillo ) => {    
  const res = await consult("UPDATE platillo SET ? WHERE id_platillo = ?", data, id);
  validateConsult(res.affectedRows, "Error al actualizar el insumo");
};

// delete platillo
export const deletePlatillo = async ( id: number ) => {
  const res = await consult("DELETE FROM insumo WHERE id_insumo = ?", id);
  validateConsult(res.affectedRows, "Error al eliminar el insumo");
};
