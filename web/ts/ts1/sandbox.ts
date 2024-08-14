//variables

let temp :string|number = 'hey'
temp = 90
let loc = 'TVC'

let empty : boolean;
empty = true



//arrays

let fruits : Array<string> = ['apple','date','pineapple']
let arr =[1,'a',true]
arr.push(2,'v',false)

let arr2 : Array<any> = ['a',1,2,3,true, new Date(),(a,b)=>a+b]
let numbers_extracted = arr2.filter((elt)=>typeof elt=='number')
console.log(numbers_extracted)
console.log(arr2[6](2,6))

let array : Array<string>;
array = ['a','b','c','d']

let array2 : Array<string|number>;
array2 = ['a','b',1,2]




//object

let obj1 : {field1:string,field2:number};

let pet :Object = {type:"dog",name:"Bruno",breed:"German Shepard"}
pet = {age:5,color:"black",weight:25.6}
let pet1 = new Object({...pet})
pet1['age'] = 22
console.log(pet)
console.log(pet1)


//custom types
type myType = string|number;

//eg:-
let fn : (arg1:myType)=>void;




//classes and interfaces

interface Member{

    printRecord : ()=>void;

}

class Student implements Member{
    private id:string;
    private age:number;
    private name:string;
    private courses:Array<string>

    constructor(id:string,name:string,age:number,courses:Array<string>){
        this.id = id;
        this.name=name;
        this.age=age;
        this.courses=courses

    }

    printRecord(){
        console.log(this.id,this.name,this.age,this.courses)
    }
}

let s1 = new Student('s1','tom',22,['java'])
s1.printRecord()




//functions

type fn = (a:number,b:number) => number;
let sum : fn = (a,b) =>a+b;

let cb1 : (a:number|string,b:string)=>string;

cb1 = function(a,b){
    return a+b;
}

cb1(2,'3')

function cb(param1: string, param2:number, param3:any) : void{
    console.log(param1);
    
}

function cb_wrap(cb:Function,arg1:number) : string{
    return ""
}


const add = (a:number,b:number=10,c?:number) => {
    if(c!=undefined)
        console.log(a+b+c);
    else
        console.log(a+b);
        
};
add(1,void 0,3);
