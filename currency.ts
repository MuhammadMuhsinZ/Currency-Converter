import inquirer from "inquirer";
let Currency =  1
for (let C = 0; C < Currency ; C ++){
    interface UsingInput{
        inputcurrency : string,
        outputcurrency: string,
        inputamount: number
    }
    let UserInput = await inquirer.prompt([
        {
            type:`list`,
            name:"From",
            message:"Please select your currency",
            choices:["PKR","USD","SaudiRiyal"]
        },
        {
            type:`list`,
            name:"To",
            message:"Please select your converation currency",
            choices:["PKR","USD","SaudiRiyal"]
        },
        {
            type:`number`,
            name:"amount",
            message:"Please enter your amount",
        }

    ])
         const input = UserInput.From
         const output = UserInput.To
         const amount = UserInput. amount 
        /////////////// PKR ////////////////////
         if (input === "PKR"){
            if (output === "USD"){
                console.log(`The amount of ${amount} USD = ${amount / 280.07} `)
            }
         };
         if (input === "PKR"){
            if (output === "SaudiRiyal"){
                console.log(`The amount ${amount} SaudiRiyal = ${amount / 74.67}`)
            }
         }
///////////////////////// USD /////////////////////////
         if (input === "USD"){
            if (output === "PKR"){
                console.log(`The amount of ${amount} PKR = ${amount * 280.07} `)
            }
         };
         if (input === "USD"){
            if (output === "SaudiRiyal"){
                const result =
                amount * 280.07
                console.log(result / 74.67)

            }
         }
////////////////////// Saudi Riyal /////////////////////////////
         if (input === "SaudiRiyal"){
            if (output === "PKR"){
                console.log(`The amount of ${amount} PKR = ${amount * 74.67}`)
            }
         };
         if (input === "SaudiRiyal"){
            if (output === "USD"){
                const result =
                amount * 74.67
                  console.log(result / 280.07)

            }
            }
         
// const end = await inquirer.prompt([
//     {
//         type:`confirm`,
//         name:"Addmore",
//         message:"Are you want to accuess further Currency Converter",
//         default: [true , false]
//     }
// ])

// if (end.again === true){
//     UserInput++
// }else (end.again === false ){
//     console.log("Thanks your using Currency Coverter")
// } 

const ans = await inquirer.prompt({
    type:"input",
    name:"again",
    message:"Are you want another conversion ? (y/n)"
})
if(ans.again === "y"){
    Currency++
}else(ans.again === "n"){
     console.log("Thanks your using Currency Coverter")
    }
    
};







        









        