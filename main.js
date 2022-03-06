const prompt = require( 'prompt-sync')({sigint: true});

   //Fishing Game Greeting//

console.log("Welcome to Crystal Lake. Are you ready for your fishing challenge? Here's how it works!");
console.log("You have 6 hours to fish and You may ONLY keep up to 10 lbs of fish. You must decide to either catch [c] or release[r] some fish within the time limit."); 
console.log(" Finally, The more each fish weighs the more $ money it's worth.");
console.log("=================================================================================================");
        
//variables//
let time = 0;
let fullFishCatch = [" "];
let hour = 6;
let TotalcombinedWeight = 0;
let TotalcombinedValue = 0;

// Fish  Randomizers //

 function fishnamerandomizer(){
    let allFish = ["Salmon", "Trout", "Bass", "Crappie", "Perch", "Snapper", "Tuna", "Walleye", "Grouper", "Halibut"];
    let descript1 = ["Teeny", "Colossal", "Bumpy", "Grand", "Dragon", "King", "Mid-Sized"];
    let descript2 = ["Oily", "Flakey", "Striped", "Yellow", "Blue", "Red", "Rainbow"];

 
let FishName = Math.ceil(Math.random() * allFish.length-1);
    let fishSize = Math.ceil(Math.random() * descript1.length-1);
        let fishDek = Math. ceil(Math.random() * descript2.length-1);


    let fishFirstname = allFish[FishName];
        let fishMidname = fishSize[descript1];
            let fishLastname = fishDek[descript2];
            

            let fishFullName = fishFirstname + " " + fishMidname + " " + fishLastname;

                return fishFullName;
}

//fish weight randomizer//

    function fishWeightrandomizer(){
let fishWeight = Math.ceil(Math.random() * 1000) / 300;
return fishWeight;
    }

//fish price randomizer//

    function fishValuerandomizer(){
let fishValue = Math.ceil(Math.random() * 1000) / 100;
return fishValue;
}

 
//while loop//

while(time < 6){

    let fishFullName = fishnamerandomizer();
    let fishWeight = fishWeightrandomizer ();
    let fishValue = fishValuerandomizer();

console.log ("You caught a '" + fishFullName + "' weighing: " + fishWeight.toFixed(2) + "lbs!" + " Your catch is worth: $" + fishValue.toFixed(2) + ".")
console.log("=============================================================================================");
console.log("The time is: " + hour + ":00. " + "So far your catch weighs: " + TotalcombinedWeight.toFixed(2) + " lbs. " + "Total $: " + TotalcombinedValue.toFixed(2));
        if(fishWeight + TotalcombinedWeight >= 10){
            console.log("Your fish total catch was over the weight limit and you released it.")
            hour --;
            time++;
        }

        else{
            console.log("What would you like to do");
            
            let yourchoice = String(prompt("catch [c] or release [r] >"));
    
    
    if(yourchoice === 'c'){
        fullFishCatch.push(fishFullName);
        TotalcombinedWeight = TotalcombinedWeight + fishWeight;
        TotalcombinedValue = TotalcombinedValue + fishValue;

        hour --;
        time ++;

    }
            else if(yourchoice === 'r'){              
        hour --;
        time ++;
    
    }
    
        }      
        
        if(time === 6);{

    console.log("Wow! What a Catch! You did an AMAZING Job!");
    console.log("Your final fish catch details: ");
    console.log("=======================================================");
    console.log("fishFullName");
    console.log("Total weight of your catch: " + combinedWeight.toFixed(2) + " lbs. " + "Total catch value: $" + combinedValue);
    console.log("Total number of catches: " + fullFishCatch.length);
    
        return ("fullFishCatch.length");{

        }
    }
