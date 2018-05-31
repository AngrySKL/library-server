import { Router } from "express";
import { dbConfig } from "../config/db.config";
import { createConnection } from "mysql";

import * as bodyParser from 'body-parser';

const registerRouter: Router = Router();
const urlParser = bodyParser.json();

registerRouter.post('/', urlParser, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `insert into user (name, password) values (${username}, ${password})`;
    createConnection(dbConfig).query(sql, (err) => {
        if (err) {
            return res.json({ code: 401, message: 'Register failed!'});
        }

        return res.json({ code: 200, message: 'Register success!' });
    })
  });
  
  export { registerRouter };