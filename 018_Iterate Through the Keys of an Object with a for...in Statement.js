// Iterate Through the Keys of an Object with a for...in Statement

/*Sometimes you need to iterate through all the keys within an object. You can use a for...in loop to do this. The for...in loop looks like:

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
This code logs milk 1 and eggs 12, with each key-value pair on its own line.

We defined the variable food in the loop head and this variable was set to each of the object's keys on each iteration, resulting in each food's name being printed to the console.

NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}*/



function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
}