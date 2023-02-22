import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    const parsedId = parseInt(id.toString());
    if (isNaN(parsedId)) return res.status(400).end();
    const user = await prisma.user.findUnique({ where: { id: parsedId } });
    return user ? res.send(user) : res.status(400).end();
}
