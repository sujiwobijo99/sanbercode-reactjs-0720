// Soal 1
console.log('------Soal 1------')
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullname : function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
}
   
  //Driver Code 
  newFunction("William", "Imoh").fullname()
  console.log()



// Soal 2
console.log('------Soal 2------')
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
const {firstName, lastName, destination, occupation, spell} = newObject

  // Driver code
console.log(firstName, lastName, destination, occupation)
console.log()



// Soal 3
console.log('------Soal 3------')
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)
console.log()