let { userData }= require('./Data');

const getUser = (req, res) =>{
    try{
    const{params:{id}}= req;
    const currentUser= userData

    const{
        firstName,
        lastName,
        maidenName,
        age,
        email,
        address,
        company,

    }=currentUser;
    res.send({
        status : 200,
        fullName: (firstName.stringValue,lastName.stringValue,maidenName.stringValue),//lastName.stringValue
        email: email.stringValue,
        age: age.stringValue,
        address: address.stringValue,
        company: company.stringValue,



    })
}catch(error){
    res.send(404);
}
};

const updateAdress = async (req, res)=>{
    try{
    const {body:adress} = req;
    const {address,city,coordinates,lat,lng,postalCode,state} = adress;
    const resp = await Data.update({
        address,
        city,
        coordinates,
        lat,
        lng,
        postalCode,
        state,


    });

    res.send({
        status: 200,
        user: "",
    })
}catch(error){
    res.send(404);
}
};

module.exports = {
    updateAdress,
    getUser,
 }