import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async(req, res) => {
    const prisma = new PrismaClient();
    if (req.method === 'GET') {
        const users = await prisma.user.findMany();
        return res.send(users);
    } else if (req.method === 'POST') {
        const { adminEmail, password } = req.body;
        const result = await prisma.user.create({
            data: {
                email: adminEmail, 
                password: password
            },
        })
        res.json(result)
    }
}
