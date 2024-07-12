import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// create a record
// db.snippet.create({
//   data : {
//     title : 'First Snippet',
//     code : 'const test = () => {}'
//   }
// })