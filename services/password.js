const passwordService = class{
    constructor(userService){
        this.PasswordService = userService
    }

    async change(email, password, newPassword){
        const user = await this.PasswordService.changePassword(email, password, newPassword)
        
        if(user){
            console.log("Exitoso/Successful")
        }else{
            throw new Error("Hubo algún error / Something wen't wrong")
        }
    }
}

module.exports = passwordService