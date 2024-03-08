import { Op } from "sequelize";
import BlogModel from "../../../../DB/model/blog.model.js";
import UserModel from "../../../../DB/model/user.model.js"

export const allUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll({
            include: BlogModel,
            attributes: ['title', 'body']
        },
            {
                where: {
                    //[Op.or]:[{age:20},{username:"hussien"}]

                    // age:{
                    //     [Op.lte]:17
                    // }

                    // age:{
                    //     [Op.between]: [18, 24]
                    // }

                    // age: {
                    //     [Op.in]: [18, 20]
                    // },

                    // username: {
                    //     // [Op.like]: '%a%'
                    //     //[Op.endsWith]: "na"
                    //     [Op.substring]:'ana'
                    // }
                }
            });
        //  users = "test";
        return res.json({ message: 'success', users })
    } catch (error) {
        return res.json({ message: "catch error", error: error.stack });
    }
}
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userCount = await UserModel.update(req.body,
            {
                where: {
                    id
                }
            })
        if (userCount == 0) {
            return res.json({ message: "fail to update user data" });
        }
        return res.json({ message: "success", userCount })
    } catch (error) {
        return res.json({ message: "catch error", error: error.stack });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await UserModel.destroy({
            where: { id }
        });
        if (deletedRows) {
            return res.json({ message: "success", deletedRows });
        }
        return res.json({ message: "fail to delete user data" })
    }
    catch (error) {
        return res.json({ message: "catch error", error: error.stack })
    }
}

