import BlogModel from "../../../../DB/model/blog.model.js";
import UserModel from "../../../../DB/model/user.model.js";


export const AllBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll({
            attributes: { exclude: ['UserId'] },
            include: {
                model: UserModel,
                attributes: ['username']
            }
        });
        return res.json({ message: "success", blogs });
    } catch (error) {
        return res.json({ message: "catch error", error: error.stack });
    }
}
export const createBlog = async (req, res) => {
    try {
        const { title, body, UserId } = req.body;
        const user = await UserModel.findByPk(UserId);
        if (!user) {
            return res.json({ message: "User not found" });
        }
        const blog = await BlogModel.create({ title, body, UserId })
        return res.json({ message: "success", blog })
    } catch (error) {
        if (error.original?.errno == 1062) {
            return res.json({ message: "title already exists" })
        } else {
            return res.json({ message: "catch error", error: error.stack });
        }
    }
}

