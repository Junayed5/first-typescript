//built in type: number, string, boolean, void, null, undefined, 

let userId:number;
let userName:string;
let isActivated: boolean;

userId = 101;
userName = 'Md Junayed';
isActivated = true;

console.log(`This is ${userName}. My Id is ${userId}, I am always ${isActivated}ly active `);

function isVoid() : void{
    console.log('This is void function');
    
}

isVoid();