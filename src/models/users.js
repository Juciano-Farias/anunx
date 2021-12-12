import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O campo "nome" é obrigatótio']
    },
    email: {
        type: String,
        required: [true, 'O campo "email" é obrigatótio']
    },
    password: {
        type: String,
        required: [true, 'O campo "senha" é obrigatótio']
    },

})

export default mongoose.models.users || mongoose.model('users', schema) //se ele ja tiver o model, ele retorna o model. Se nao rele cria e retorna.