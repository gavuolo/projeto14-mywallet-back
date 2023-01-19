import express from 'express';
import cors from 'cors';
import route from '../src/routes/routes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use(route)

const PORT = 5000
app.listen(PORT, () => console.log(`Server running in port: ${PORT}`))