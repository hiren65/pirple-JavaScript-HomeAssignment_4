/*
* Homework Assignment #4: Functions
*
*/

/*
  you should create a function that accepts a name and returns a boolean
  (True or False) representing whether that name identifies a man
*/
const Socrates = "man";
let gh;
let mortalTest = function(name){

                  var test = function(name){
                        if(name === "man"){
                          return true;
                        }else if(typeof name === "undefined"){
                          return false;
                        }
                        else{
                          return false;
                        }
                      }
                  return test(name);
}
//gives answer true
console.log(mortalTest("man"));
//gives answer false
//gracefully handle unexpected inputs (such as an unrecognized name or
// a name that is a not a string at all)
console.log(mortalTest(""));
console.log(mortalTest("karan"));
console.log(mortalTest(45));


//second Extra assignment
//here in flavour function there are two bullion variable in array chocolate and venilla
//if venilla is true than cocolate goes false and vice versa


var myItem = "cake";
let vanilla = true;
let chocolate = false;
let array = [{vanilla:true},{chocolate:false}];

let flavour = function(item){
  if(array[0].vanilla){
    chocolate = false;
    console.log("This " + item + " is not chocolate. \n");
    console.log("Therefore this "+item + " is vanilla \n");
  }else if (array[1].chocolate){
    vanilla = false;
    console.log("This " + item + " is  chocolate. \n");
    console.log("Therefore this "+item + " is not vanilla \n");
  }
}
flavour(myItem);
