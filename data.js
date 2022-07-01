
const data = {
    data1 : {name : "Aakriti" , email : "xyz@xyz.com"},
    data2 : {name : "Aakriti2" ,email : "2xyz@xyz.com"},
    student :{first : "hello" , fun : function(){return "hi"}}
};

//Three types of exports
module.exports = data; // for all data

// exports.users = users; // for individual data

// module.exports = {
//     data1: data2 , 
//     data2 : data2
// }