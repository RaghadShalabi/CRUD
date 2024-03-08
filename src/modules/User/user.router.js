import express from "express";
import * as UserController from './controller/user.controller.js';
const app = express();

app.get('/',UserController.allUsers);
app.patch('/update/:id',UserController.updateUser);
app.delete('/delete/:id',UserController.deleteUser);

export default app;