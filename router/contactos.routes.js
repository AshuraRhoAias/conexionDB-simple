import { Router } from "express";
import db from "../config/Db.js";

const router = Router();

router.get('/list', (req, res) => {
    const query = "SELECT nombre, correo FROM contact";

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "erorr al obtener los datos" })
        } else {
            return res.status(200).json(result)
        }
    })
})


export default router;