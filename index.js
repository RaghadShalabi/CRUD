import express from 'express';
import initApp from './src/modules/app.router.js';
const app = express();
app.use(express.json());

//import AuthRouter from './src/modules/auth/auth.router.js';// الى app.router.js
//app.use('/auth', authRouter);

initApp(app,express)

app.listen(1000, () => {
    console.log("server is running.....");
})


