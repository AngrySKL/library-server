import { Router } from "express";
import { createConnection } from "mysql";

import * as bodyParser from 'body-parser';
import { dbConfig } from "../config/db.config";

const loginRouter: Router = Router();
const urlParser = bodyParser.json();

loginRouter.post('/', urlParser, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = `select * from user where name=${username} and password=${password}`;
  createConnection(dbConfig).query(sql, (err, users) => {
    if (err) {
      return res.json({code: 300, message: 'Login failed!'});
    }
    const user = users[0];
    return res.json({code: 200, message: 'Login success!', data: { id: user.id, nickname: 'Veal' }});
  })
});

export { loginRouter };