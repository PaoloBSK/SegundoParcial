const { restart } = require("nodemon");
const{ userData} = require ("../data")//llamamos los datos


const getUserDataById = (req,res)=> {
    try{
    const {params : { id }} = req;
    const currentUser = userData.find(x => x.id == id);//triple igual es para igual valor y tipo, dos es para valor----current user guarda refencia al objeto para usarlo luego
    
            const{firstName,
                lastName,
                maidenName,
                email,
                age,
                address,
                company
            } = currentUser;
            res.send({
            status: 200,
            user: {
            fullName: `${firstName}${lastName}${maidenName}`,
            email,
            age,
            address,
            jobTitle: company.title
        }
        

    })
    }
    
    catch(error){
        console.log(error);
        res.send( {
            status: 500,
            user:{}
    });
    }
}
const updateUserAddressById = (req,res) =>{
    try {
    const {params : { id }} = req;
    const {body :  newAddress} = req;
    const currentUser = userData.find(x => x.id == id);
    const statusValue = (currentUser == undefined) ? 404 : 200
    let user = {...currentUser, address: newAddress};
    res.send({
        status: statusValue,
        user
    })
 
       

    } catch(error) {
        console.log(error);
        res.send({
            status: 500,
            user: {}
        })
    }

}

const createuserid = (req,res) =>{
    try{
        const {body :  newUser} = req;
        userData.create()
        res.send({
            status:200,
                id,
                email
            
        })
    } catch(error) {
    console.log(error);
    res.send({
        status: 500,
            
    })
    }       

}
const deleteuserid =  (req,res) =>{
    try{
        const {params : { id }} = req;
        const currentUser = userData.findIndex(x => x.id == id);
        userData.splice(currentUser,1);
        res.send({
            status:200,
            userData
            
        })
    } catch(error) {
    console.log(error);
    res.send({
        status: 500,
        user: {}
    })
}

}


module.exports = {
    getUserDataById,
    updateUserAddressById,
    createuserid,
    deleteuserid
}