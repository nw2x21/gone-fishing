const prompt = require( 'prompt-sync') ({sigint: true});
//Step 1: Foundation//

let time = 0;
let fullFishCatch = [""];
let hour = 6;
let combinedWeight = 0;
let combinedValue = 0;

//Create Fish Randomizer

function Radomizer(){
    let availFish = ["Salmon", "Trout", "Bass", "Crappie", "Perch", "Snapper", "Tuna", "Walleye", "Grouper", "Halibut" ];
    let descript1 = ["Teeny", "Colossal", "Bumpy", "Grand", "Dragon", "King", "Mid-Sized"]
    let descript2 = ["Oily", "Flakey", "Striped", "Yellow", "Blue", "Red", "Rainbow"]


let FishName = Math.ceil(Math.random() * availFish.length-1);
    let fishSize = Math.ceil(Math.random() * descript1.length-1);
        let fishDek = Math. ceil(Math.random() * descript2.length-1);

    let fishFirstname = availFish[FishName];
        let fishMidname = fishSize[descript1];
            let fishLastname = fishDek[descript2];

            let fishFullName = fishFirstname + " " + fishMidname + " " + fishLastname;

                return fishFullName;
}

//fish weight

    function randomweight(){
let fishWeight = Math.ceil(Math.random() * 1000) / 300;
return fishWeight;
    }

//fish price

    function randomvalue(){
let fishValue = Math.ceil(Math.random() * 1000) / 100;
return fishValue;
    } 


    //Fishing Game Greeting

console.log("Welcome to Crystal Lake. Are you ready for your fishing challenge? Here's how it works!");
console.log("You have 6 hours to fish and You may ONLY keep up to 10 lbs of fish. You must decide to either catch [c] or release[r] some fish within the time limit."); 
console.log(" Finally, The more each fish weighs the more $ money it's worth.");
console.log("=================================================================================================");
        
//while loop
while(time < 6){



let fishFullName = randomizer();
let fishWeight = randomweight ();
let fishValue = randomvalue();

console.log ("You caught a '" + fishFullName + "' weighing: " + fishWeight.toFixed(2) + "lbs!" + " Your catch is worth: $" + fishvalue.toFixed(2) + ".")
console.log("=============================================================================================");
console.log("The time is: " + hour + ":00. " + "So far your catch weighs: " + combinedweight.toFixed(2) + " lbs. " + "Total $: " + combinedvalue.toFixed(2));
        if(fishWeight + combinedweight >= 10){
            console.log("Your fish total catch was over the weight limit and you released it.")
            hour --;
            time++;
        }
        else{

let yourchoice = String(prompt("catch [c] or release [r] >"));
    
    if(yourchoice === 'c'){
        FullfishCatch.push(fishFullName);
        combinedweight = combinedweight + fishWeight;
        combinedvalue = combinedvalue + fishValue;

        hour --;
        time ++;

    }
    else if(yourchoice === 'r'){ 
        hour --;
        time ++;
    }
    
    
    }


}
if(time === 6){
console.log("Wow! What a Catch! You did an AMAZING Job!");
console.log("=======================================================");
console.log("Here are your final catch details:");
console.log("Total weight of your catch: " + combinedweight.toFixed(2) + " lbs. " + "Total catch value: $" + combinedvalue);
console.log("Total number of catches: " + FullfishCatch.length);

return;}


