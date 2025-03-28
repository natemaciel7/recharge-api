import connection from "../config/database";
import { Recharge } from "../protocols/recharge.protocol";

export async function findPhoneById(id: number) {
  const result = await connection.query("SELECT * FROM phones WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
}

export async function insertRecharge(recharge: Recharge) {
  const { phoneId, amount } = recharge;
  const result = await connection.query(
    `INSERT INTO recharges (phone_id, amount) VALUES ($1, $2) RETURNING *`,
    [phoneId, amount]
  );
  return result.rows[0];
}

export async function findRechargesByNumber(number: string) {
  const result = await connection.query(
    `SELECT r.* FROM recharges r
     JOIN phones p ON r.phone_id = p.id
     WHERE p.number = $1`,
    [number]
  );
  return result.rows;
}

export async function getSummary(document: string) {
  const result = await connection.query(
    `SELECT p.*, 
            json_build_object('id', c.id, 'name', c.name, 'code', c.code) as carrier,
            COALESCE(json_agg(json_build_object('id', r.id, 'amount', r.amount, 'created_at', r.created_at)) 
              FILTER (WHERE r.id IS NOT NULL), '[]') as recharges
     FROM phones p
     JOIN clients cl ON p.client_id = cl.id
     JOIN carriers c ON p.carrier_id = c.id
     LEFT JOIN recharges r ON p.id = r.phone_id
     WHERE cl.document = $1
     GROUP BY p.id, c.id`,
    [document]
  );
  return {
    document,
    phones: result.rows,
  };
}
