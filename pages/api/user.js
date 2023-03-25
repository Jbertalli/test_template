// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async(req, res) => {
//     // const prisma = new PrismaClient();
//     if (req.method === 'POST') {
//         const { adminEmail, password } = req.body;
//         const result = await prisma.user.create({
//             data: {
//                 email: adminEmail, 
//                 password: password
//             },
//         })
//         res.json(result)
//     } else if (req.method === 'GET') {
//         const result = await prisma.user.findMany();
//         // const result = await prisma.user.findFirst();
//         res.json(result);
//         return res.send(result);
//     } else if (req.method === 'DELETE') {
//         const users = await prisma.user.deleteMany({})
//         res.json(users);
//     }
// }
