import express from 'express';
import * as AuthController from './controller/auth.controller.js'
const app = express();

app.post('/signUp',AuthController.signUp)
app.post('/signIn',AuthController.signIn);

export default app; 
