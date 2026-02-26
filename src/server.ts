import express from 'express';
import cors from 'cors';
import { createUser } from './index';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    const result = createUser(name, email, password);
    res.json(result);
});

export { app };

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
