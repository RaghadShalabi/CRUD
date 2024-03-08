import UserModel from "../../../../DB/model/user.model.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const user = await UserModel.create({ username: name, email, password, age });
        return res.json({ message: "success", user });
    } catch (error) {
        if (error.original?.errno == 1062) {
            return res.json({ message: "email already exists" })
        } else {
            return res.json({ message: "catch error", error: error.stack });
        }
    }
}
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkUser = await UserModel.findAll({
            attributes: ['id', 'username'],
            where: {
                email: email,
                password: password
            }
        })
        if (!checkUser.length) {
            return res.json({ message: "Email or Password is Incorrect" })
        }
        return res.json({ message: "success", checkUser })

    } catch (error) {
        return res.json({ message: "catch error", error: error.stack });

    }
}
