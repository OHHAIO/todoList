import { Mysql } from "./database/mysql";

const mysql = new Mysql();
export const getMember = mysql.connect(async (con: any, id: string) => {
  const result = await con.query("select * from member", [id]);
  return result;
});
