const bcrypt = require('bcryptjs')

const authService = class{
    constructor(userService){
        this.UserService = userService
    }
    async login(email,password){
        const user = await this.UserService.getByEmail(email)
        
        // if(user){
        //     const isPasswordMatch = awaitbcrypt.compare(password,user.password)
        //     console.log("Contraseña comparada:", isPasswordMatch)
        //     return user.toObject();
        // }else if(!user){
        //     throw new Error('Usuario no encontrado / User not Found')
        // }else{
        //     throw new Error('No está autorizado/ Not Authorized')
        // }
                
        if(!user){
             throw new Error(`Este usuario no existe`)
         } else { if( await bcrypt.compare(password, user.password || !user)){
             return user.toObject();
         }else{
             throw new Error('Inautorizado')
         }
    }
}
}


module.exports = authService