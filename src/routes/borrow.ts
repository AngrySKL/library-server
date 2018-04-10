import { BorrowFail, BorrowSuccess } from './../models/response';
import { Router } from "express";
import { books } from "./mock";

import * as bodyParser from 'body-parser';

const borrowRouter = Router();
const urlParser = bodyParser.json();

borrowRouter.put('/', urlParser,  (req, res) => {
  const userId = req.body.uid;
  const bookId = req.body.bid;

  // TODO: do some database work to verify if this bookId is borrowed
  const random = Math.random();
  if (random === 0){
    res.json(new BorrowFail({
      borrower: 'Askey'
    }));
  } else {
    const index = books.findIndex((book) => book.id === bookId);
    books[index].borrower = 'Veal';
    books[index].status = 1;
    
    res.json(new BorrowSuccess({
      borrower: 'Veal'
    }));
  }

});

export { borrowRouter };