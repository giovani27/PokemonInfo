const express = require('express')
const router = express.Router()
const Usuario = require('../models/usuario_model')



router.post('/login', async (req, res) => {
        try{
            const credenciais = req.body;
            const usuario = await Usuario.findOne(credenciais)

            if(usuario){
                res.json({error: false , usuario})
            }else{
                res.json({error: true , message:" nenhum usuario encontrado"})
            }

        }catch (err){
            res.json({error: true, message: err.message})
        }
})

router.post('/cadastrar', async (req, res) => {
    try{
        const {nome , email , senha, meuspoke} = req.body;
        let data = {}
        let user =  await Usuario.findOne({email});
        if(!user){
            data  = {nome,email,senha,meuspoke}
            user = await Usuario.create(data)
            return res.status(200).json(user)
        }else {
            return res.status(500).json({message: "email usado"})
        }
   
    }catch (err){
        res.json({error: true, message: err.message})
    }
})




module.exports =  router