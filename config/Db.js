import mysql2 from 'mysql2';

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",  // Cambiar 'username' por 'user'
    password: "",
    database: "contactos",
});

db.connect(err => {
    if (err) {  // Cambiar la lógica del error
        console.error("❌ Error al conectar a la DB:", err);
        return;
    }
    console.log("✅ CONEXIÓN EXITOSA");
});

export default db;
