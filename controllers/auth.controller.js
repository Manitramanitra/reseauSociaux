const UserModel = require('../models/user.models')
module.exports.signUp = async (req, res) => {
    console.log(req.body)
    const { pseudo, email, password } = req.body;
    try {
        const user = await UserModel.create({ pseudo, email, password });
        res.status(201).send({ user: user._id });
    }
    catch (err) {
        res.status(400).json({ err })
    }
}  