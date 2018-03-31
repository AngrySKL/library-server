import * as express from 'express';
import { bookRouter } from './routes/book';
import { loginRouter } from './routes/login';
import { borrowRouter } from './routes/borrow';

const app = express();

app.use('/api/books', bookRouter);
app.use('/api/login', loginRouter);
app.use('/api/borrow', borrowRouter);

const server = app.listen(8000, 'localhost', () => {
  console.log('Server Started: http://localhost:8000');
});
