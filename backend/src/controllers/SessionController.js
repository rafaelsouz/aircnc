//Index - listar todas as sessões
//show - Lista uma unica sessão
//store - Criar uma sessão
//update - Editar uma sessão
//destroy - destruir uma sessão

const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const email = req.body.email;

        let user = await User.findOne({email : email})

        if (!user){
            user = await User.create({ email })
        }

        return res.json(user);
    }
};