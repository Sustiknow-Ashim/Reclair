import Jwt from "jsonwebtoken";

const generateToken = (id) =>{
    return Jwt.sign({id}, 'Reclair@1978', {
        expiresIn: '1d'
    })
}

export {generateToken}