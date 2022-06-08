import getConnection from "./connection";
import Insumo from "../shames/insumo";

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

// insert insumo
export const insertInsumo = async ( data: Insumo ) => {
    const res = await consult("INSERT INTO insumo SET ?", data);
    validateConsult(res.affectedRows, "Error al registrar insumo");
}

// get insumos
export const getInsumos = async () => {
  return await consult("SELECT * FROM insumo");
}

// update insumo
export const updateInsumo = async ( id: number, data: Insumo ) => {    
  const res = await consult("UPDATE insumo SET ? WHERE id_insumo = ?", data, id);
  validateConsult(res.affectedRows, "Error al actualizar el insumo");
};

// delete insumo
export const deleteInsumo = async ( id: number ) => {
  const res = await consult("DELETE FROM insumo WHERE id_insumo = ?", id);
  validateConsult(res.affectedRows, "Error al eliminar el insumo");
};
