
import express from 'express';
import cors from 'cors';
import contactosRoutes from './router/contactos.routes.js'; // Agregar la extensión .js

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json()); // Agregar paréntesis

app.use('/contactos', contactosRoutes);
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});