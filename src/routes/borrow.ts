import { BorrowFail, BorrowSuccess } from './../models/response';
import { Router } from "express";
import { books } from "./mock";
import { createConnection } from 'mysql';

import * as bodyParser from 'body-parser';
import { dbConfig } from '../config/db.config';

const borrowRouter = Router();
const urlParser = bodyParser.json();

borrowRouter.post('/', urlParser,  (req, res) => {
  const userId = req.body.uid;
  const bookId = req.body.bid;

  const tempBorrowerId = userId ? userId : 6;
  const sql = `update book set borrowerId=${tempBorrowerId} where id=${bookId}`;
  createConnection(dbConfig).query(sql, (err) => {
    if (err) {
      return res.json(new BorrowFail());
    }

    return res.json(new BorrowSuccess());
  })
});

export { borrowRouter };