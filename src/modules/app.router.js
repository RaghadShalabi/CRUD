import { connectDB } from '../../DB/connection.js';
import authRouter from './auth/auth.router.js';
import blogRouter from './blog/blog.router.js';
import userRouter from './User/user.router.js';
import cors from 'cors'

const initApp = (app, express) => {
    app.use(express.json());
    connectDB();
    app.use(cors());
    app.use('/auth', authRouter);
    app.use('/blog', blogRouter);
    app.use('/user', userRouter);
    app.use('*', (req, res) => {
        return res.json({ message: 'Page not found x_x' });
    })
}
export default initApp;
