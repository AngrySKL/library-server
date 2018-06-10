import * as express from 'express';
import * as cors from 'cors';

import { bookRouter } from './routes/book';
import { loginRouter } from './routes/login';
import { borrowRouter } from './routes/borrow';
import { registerRouter } from './routes/register';

const app = express();

app.use(cors());
app.use('/api/books', bookRouter);
app.use('/api/login', loginRouter);
app.use('/api/borrow', borrowRouter);
app.use('/api/registe', registerRouter);

const server = app.listen(8000, 'localhost', () => {
  console.log('Server Started: http://localhost:8000');
});
