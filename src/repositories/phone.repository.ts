import connection from "../config/database";
import { Phone } from "../protocols/phone.protocols";

export async function createPhone(phone: Phone) {
  const { number, name, description, clientId, carrierId } = phone;
  const result = await connection.query(
    `INSERT INTO phones (number, name, description, client_id, carrier_id)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [number, name, description, clientId, carrierId]
  );
  return result.rows[0];
}

export async function getPhonesByDocument(document: string) {
  const result = await connection.query(
    `SELECT p.* FROM phones p
     JOIN clients c ON p.client_id = c.id
     WHERE c.document = $1`,
    [document]
  );
  return result.rows;
}
