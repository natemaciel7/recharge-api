import connection from "../config/database";

export async function getAllClients() {
  const result = await connection.query("SELECT * FROM clients");
  return result.rows;
}
