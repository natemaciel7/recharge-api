import connection from "../config/database";
import { Phone } from "../protocols/phone.protocols";

export async function findClientByDocument(document: string) {
  const result = await connection.query(
    "SELECT * FROM clients WHERE document = $1",
    [document]
  );
  return result.rows[0];
}

export async function createClient(document: string) {
  const result = await connection.query(
    "INSERT INTO clients (document) VALUES ($1) RETURNING *",
    [document]
  );
  return result.rows[0];
}

export async function createPhone(phone: Phone & { clientId: number }) {
  const { number, name, description, carrierId, clientId } = phone;
  const result = await connection.query(
    `INSERT INTO phones (number, name, description, client_id, carrier_id)
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [number, name, description, clientId, carrierId]
  );
  return result.rows[0];
}

export async function getPhonesByClientId(clientId: number) {
  const result = await connection.query(
    "SELECT * FROM phones WHERE client_id = $1",
    [clientId]
  );
  return result.rows;
}

export async function findPhoneByNumber(number: string) {
  const result = await connection.query(
    "SELECT * FROM phones WHERE number = $1",
    [number]
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
