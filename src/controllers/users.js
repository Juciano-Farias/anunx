import UsersModel from '../models/users'
import dbConnect from '../utils/dbConnect'
import { crypto } from '../utils/password'

const get = async (req, res) => {
    await dbConnect()
    const users = await UsersModel.find()
    res.status(200).json({ success: true, users })
}

const post = (async (req, res) => {
    // pegar os dados que vem na request
    //  conectar com o banco de dados
    // criptografar as senhas
    //  salvar os dados
    //  responder sucesso

    const {
        name,
        email,
        password
    } = req.body

    await dbConnect()

    const passwordCrypto = await crypto(password)

    const user = new UsersModel({
        name,
        email,
        password: passwordCrypto,
    })

    user.save()

    res.status(200).json({ success: true })
})

export {
    get,
    post
}