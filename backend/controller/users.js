const users = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getUser = async (req, res) => {
    try {
        const user = await users.findAll({
            attributes: ['id', 'name']
        });
        res.json(user)
    } catch (error) {
        console.log(error)
    }
};

exports.newUser = async (req, res) => {
    const { name, password } = req.body

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await users.create({
            name: name,
            password: hashPassword
        });
        res.json({ msg: "User Ditambahkan" })
    } catch {
        console.log(error)
    }
}

exports.login = async (req, res) => {
    try {
        const user = await users.findAll({
            where: {
                name: req.body.name
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (match) {
            const id = user[0].id
            const name = user[0].name
            console.log(process.env.ACCESS_TOKEN_SECRET)
            const token = jwt.sign({ id, name }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '20s'
            })
            const refreshToken = jwt.sign({ id, name }, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '1d'
            })
            await users.update({ refresh_token: refreshToken }, {
                where: {
                    id: id
                }
            })
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })
            res.status(200).json({
                success: true,
                statusCode: res.statusCode,
                message: "Login succesfully",
                data: {
                    name,
                    token,
                    id
                }
            })
        }
        else if (!match) res.status(400).json({ msg: "Password tidak sesuai" })
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

exports.logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if (!user[0]) return res.sendStatus(204)
    const userId = user[0].id
    await users.update({ refreshToken: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshToken');
    return res.sendStatus(200)
}