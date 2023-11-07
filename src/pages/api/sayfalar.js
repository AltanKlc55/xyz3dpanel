import { query } from "src/lib/db"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const sayfalar = await query({
            query: "SELECT * FROM test_tbl",
            values: [],
        });
        res.status(200).json({ sayfalar: sayfalar });
    }
}