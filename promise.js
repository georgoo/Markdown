// function add(num1,num2,callback){
//     let err=false
//     if(num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }

// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function div(num1,num2,callback){
//     callback(num1/num2)
// }


// add(30,20,(sum,err)=>{
//     if(err){
//         console.log("First number is zero");
//     }else{
//     console.log(sum);
//     multiply(sum,sum,(product)=>{
//         console.log(product);
//         div(product,10,(result)=>{
//             console.log(result);
//         })
//      })
//     }
// })

const { resolve, reject } = require('promise')
const promise=require('promise')

function add(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject("First number is zero")
        }
        resolve(num1+num2)
     })
}

function multiply(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("The first number is zero")
        }resolve(num1*num2)

    })
}

function div(num1,num2) {
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("The first number is Zero")
        }
        resolve(num1/num2)
    })
    
}

function minus(num1,num2){
    return new promise((resolve,reject)=>{
        if(num1==0){
            reject("The first number is zero")
        }resolve(num1-num2)

    })
}

add(10,20).then((sum)=>{
    console.log(sum);
    return multiply(sum,sum)
}).then((product)=>{
    console.log(product);
    return div(product,10)
}).then((result)=>{
    console.log(result);
    return minus(result,result)
}).then((ans)=>{
    console.log(ans);
})
.catch((err)=>{
    console.log(err);
})