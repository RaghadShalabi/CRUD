import express from 'express';
import * as BlogController from './controller/blog.controller.js';
const app = express();

app.get('/',BlogController.AllBlog);
app.post('/',BlogController.createBlog);

export default app;
