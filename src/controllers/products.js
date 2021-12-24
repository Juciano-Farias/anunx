// Processamento de arquivos recebidos em formulário. Devemos ter cuidado na hora de tratar esses dados antes de enviar pra API

import path from 'path'
import formidable from 'formidable-serverless'
import ProductsModels from '../models/products'
import dbConnect from '../utils/dbConnect'
import fs from 'fs'

const post = async (req,res) => {
    await dbConnect( )

    const form = new formidable.IncomingForm({
        multiples: true,
        uploadDir: 'public/uploads',
        keepExtensions: true,
    })

    form.parse(req, async (error, fields, data) => {
        if(error) {
            return res.status(500).json({ success: false })
        }

        const { files } = data

        const filesToRename = files instanceof Array
        ? files
        : [files]

        const filesToSave = []

        filesToRename.forEach(file => {
            const timeStamp = Date.now()
            const random = Math.floor(Math.random() * 999999999) + 1
            const extension = path.extname(file.name)

            const fileName = `${timeStamp}_${random}${extension}`

            const oldPath = path.join(__dirname, '../../../../' + file.path)
            const newPath = path.join(__dirname, '../../../../' + form.uploadDir + '/' + fileName)

            filesToSave.push({
                name: fileName,
                path: newPath,
            })

            fs.rename(oldPath, newPath, (err) => {
                if (err){
                    console.log(err)
                    return res.status(500).json({ success: false })
                }
            })

        })

        const {
            title,
            category,
            description,
            price,
            name,
            email,
            phone,
            userId,
            image,
        } = fields

        const product = new ProductsModels({
            title,
            category,
            description,
            price,
            user: {
                id: userId,
                name,
                email,
                phone,
                image,
            },
            files: filesToSave,
        })

        const register = await product.save()

        if (register) {
            res.status(201).json({ success: true })
        } else {
            res.status(500).json({ success: true })
        }

        res.status(200).json({ success: true })
    })
}

export {
    post,
}