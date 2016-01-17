var store1 = {
  '2015-01-06': [
    ['Dark Chocolate Crunchies', '4.39', 1],
    ['Mint Wafers', '1.19', 3],
    ['Peppermint Poppers', '2.48', 2],
    ['Peanut Butter Buttered Peanuts', '1.89', 6]
  ],
  '2015-01-07': [
    ['Dark Chocolate Crunchies', '4.39', 4],
    ['Berry Bites', '7.99', 3],
    ['Peppermint Poppers', '2.48', 1],
    ['Caramel Twists', '.60', 7]
  ],
  '2015-01-08': [
    ['Banana Bunches', '4.63', 1],
    ['Peppermint Poppers', '2.48', 3],
    ['Mint Wafers', '1.19', 7],
    ['Dark Chocolate Crunchies', '4.39', 2],
    ['Caramel Twists', '.60', 1]
  ],
  '2015-01-09': [
    ['Caramel Twists', '.60', 3],
    ['Peanut Butter Buttered Peanuts', '1.89', 2]
  ],
  '2015-01-10': [
    ['Peanut Butter Buttered Peanuts', '1.89', 7],
    ['Caramel Twists', '.60', 2],
    ['Berry Bites', '7.99', 3],
    ['Dark Chocolate Crunchies', '4.39', 8],
    ['Mint Wafers', '1.19', 2]
  ]
}

var store2 = {
  'inventory prices': {
      'Dark Chocolate Crunchies': 4.29,
      'Mint Wafers': 1.09,
      'Peppermint Poppers': 2.38,
      'Peanut Butter Buttered Peanuts': 1.79,
      'Berry Bites': 7.89,
      'Caramel Twists': .50,
      'Banana Bunches': 4.53
  },
  'sale dates': {
      'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
      'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
      'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
      'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
      'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Banana Bunches': ['2015-01-10', '2015-01-10']
  }
}

var store3 = [
  {
    'date':'2015-01-06',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':0
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':3
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-07',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':2
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':1
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':3
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-08',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':2
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':0
      }
    }
  },
  {
    'date':'2015-01-09',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':3
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':2
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':1
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-10',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':2
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':5
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':2
      }
    }
  }
]

var store4 = {
      'Dark Chocolate Crunchies': {
        'cost': 4.34,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08']
      },
      'Mint Wafers': {
        'cost': 1.14,
        'sold on': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09']
      },
      'Peppermint Poppers': {
        'cost': 2.43,
        'sold on': ['2015-01-07', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10', '2015-01-10']
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.84,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-08']
      },
      'Berry Bites': {
        'cost': 7.94,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10', '2015-01-10']
      },
      'Caramel Twists': {
        'cost': .55,
        'sold on': ['2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10']
      },
      'Banana Bunches': {
        'cost': 4.58,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-10']
      }
}
// How would I access the value '4.63' from store1?
//console.log(store1['2015-01-08'][0][1]);

// What about the cost of 'Dark Chocolate Crunchies' from store4?
//console.log(store4['Dark Chocolate Crunchies'].cost);

//Now get the sale dates for 'Banana Bunches' from store2.
//console.log(store2['sale dates']['Banana Bunches']);

//What built-in array property would I use to determine how 
//many sale dates there for store2's 'Banana Bunches'?
//console.log(store2['sale dates']['Banana Bunches'].length);

//Use the same property to count the total number of 'Berry Bites' 
//sold by store4.
//console.log(store4['Berry Bites']['sold on'].length);

//Create a variable to store the name of a candy (such as `var candy = 'Caramel Twists'`). 
//Use this variable to access the sale dates for that candy in store 2.
//var candy = 'Mint Wafers';
//console.log(store2['sale dates'][candy]);

//Update the previous candy name variable to a different candy. 
//How did that change the sale date data ouput?
//candy = 'Peppermint Poppers';
//console.log(store2['sale dates'][candy]);

// #### Now let's try updating some values:
//  - Set a variable to equal the prices of the 'Mint Wafers' in store2. (Spoiler warning... `var mintWafersCost = store2['inventory prices']['Mint Wafers']`)
//var mintWafersCost = store2['inventory prices']['Mint Wafers'];
//  - When you update your new variable, does the price in the store2 data change? Why?
 //mintWafersCost = store2['inventory prices']['Berry Bites'];
 //         When you update the variable, it doesn't change the value in the object, because the variable points to the object, but isn't the actual object.

//  - Now set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. (Spoiler... `var pbbpSaleDates = store2['sale dates']`)
//var pbbpSaleDates = store2['sale dates']['Peanut Butter Buttered Peanuts'];

//  - Use the `Array.push()` method to add two sale dates to the pbbpSaleDates variable. Does the original store 2 data change? Why?
      //pbbpSaleDates.push('2015-01-19', '2014-05-24');

      //console.log(pbbpSaleDates);

//  - Use `Array.pop()` to remove one of the sale dates for store2's Caramel Twists.
    //store2['sale dates']['Caramel Twists'].pop();

    //console.log(store2['sale dates']['Caramel Twists'].length);

//  - Set a variable equal to Berry Bites data for store3 on January 7. (Spoiler... `var berryBitesData = store3[1]['inventory sold']['Berry Bites'])
//var berryBitesData = store3[1]['inventory sold']['Berry Bites'];

//console.log(berryBitesData);
//  - Use your new variable to modify the quantity sold. Do you expect the store3 variable to have changed? Why?
//berryBitesData.quantity = 4;

//console.log(berryBitesData);
//console.log(store3[1]['inventory sold']['Berry Bites']);

// #### Now let's loop over some of the data:
//  - Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopNoCounter () { 
  var newArray = [];
  for (var i = 0; i < store1['2015-01-08'].length; i++) {
    newArray.push(store1['2015-01-08'][i][0]);
    console.log(store1['2015-01-08'][i]); 
  };
  console.log(counter);
};
//  - With your previous loop, use it to count the total number of candies sold that day at store1. Where do you have to initialize the counter variable? Why?

// You have to initialize the counter outside of the loop in order to be able to increment it from inside the loop.  This gives it
// a global scope and allows the loop to use it also.
function loopWithCounter () {
  var newArray = [];
  var counter = 0;
  for (var i = 0; i < store1['2015-01-08'].length; i++) {
    newArray.push(store1['2015-01-08'][i][0]);
    console.log(store1['2015-01-08'][i]); 
    counter += store1['2015-01-08'][i][2];
  };
  console.log(counter);
};

//  - Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
function store3SaleDataLoop () {
  var saleDateArray = [];
  for (var i = 0; i < store3.length; i++) {
    saleDateArray.push(store3[i]['date']);
  };
  console.log(saleDateArray);
};

//  - Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
function store2SaleDates (candy) {
  var store = store2;
  var twists = store['sale dates'][candy];
  var result = {};

  for (var i = 0; i < twists.length; i++) {
    if (result[twists[i]] ) {
      result[twists[i]] += 1;
    }
    else {
      result[twists[i]] = 1;
    }
  }
  console.log(result);

};

//store2SaleDates('Berry Bites');

// var saleDates = [];
//   var quantity = 0;
//   for (var i = 0; i < store2['sale dates'][candy].length; i++) {
//     saleDates.push(store2['sale dates'][candy][i]: quantity);
//     quantity += i;
//   }
//   console.log(saleDates);
function caramelSales () {
    var caramelSaleDates = []
    caramelSaleDates.push(store2['sale dates']['Caramel Twists']);
    var quantity = 0;
    for (var i = 0; i < store2['sale dates']['Caramel Twists'].length; i++) {
      quantity += caramelSaleDates.length;
      saleDates.push({caramelSaleDates: quantity});
    };
    console.log(saleDates);
};

//store2SaleDates();
//  - What problems did you have with the previous task? Were you able to easily increment the quantity sold data? Why?


//  - Use `Object.keys()` to get an array of the dates that candies were sold at store1.


function store1SoldDates () {
  var keys = Object.keys(store1);
  console.log(keys);
  return keys;
};

//store1SoldDates();

//  - Objects don't have a built-in length property, but we can use the array of keys to determine the "length" of the object.


//  - Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
// function store1EachDate () {
//   var keys = [];
//   keys.push(Object.keys(store1));
//   for (var key in Object.keys(store1)) {
//     for (var i = 0; i < Object.keys(store1).length; i++) {
//       console.log(store1[i]);
//     }
//   };
// };

function myFn () {
  var store = store1;
  var dates = Object.keys(store);

  for (var i = 0; i < dates.length; i++) {
    var date = dates[i];
    console.log(store[date]);
  }
};

// store1EachDate();

//  - Now, use the previous loop to calculate the total number of candies sold at store1. Where do you have to initialize the counter variable? Why?
function myFn () {
  var store = store1;
  var dates = Object.keys(store);
  var count = 0;
  for (var i = 0; i < dates.length; i++) {
    var salesData = store[dates[i]];
    for (var j = 0; j < salesData.length; j++) {
      count += salesData[j][2];
    }
  }
  console.log(count);
};

//myFn();

//  - Use the current loop to build an object with each candy as the key and the price as the value.
function myFn () {
  var store = store1;
  var dates = Object.keys(store);
  var inventory = {};
  for (var i = 0; i < dates.length; i++) {
    var salesData = store[dates[i]];
    for (var j = 0; j < salesData.length; j++) {
      var candyName = salesData[j][0];
      var candyPrice = salesData[j][1];
      inventory[candyName] = candyPrice;
    };
  };
  console.log(inventory);
};

//myFn();

//  - Within the same loop, create an object similar to `{'Mint Wafers': 12, 'Banana Bunches': 1}` where each candy is a key and the value is the quantity sold.
function myFn () {
  var store = store1;
  var dates = Object.keys(store);
  var inventory = {};
  for (var i = 0; i < dates.length; i++) {
    var salesData = store[dates[i]];
    for (var j = 0; j < salesData.length; j++) {
      var candyName = salesData[j][0];
      var candyQuantity = salesData[j][2];
      if ( !inventory[candyName] ) {
        inventory[candyName] = candyQuantity;
      } else {
        inventory[candyName] += candyQuantity;
      }
    };
  };
  console.log(inventory);
};

//myFn();

//  - Did you have any trouble adding the quantities sold for each candy? Why? How did you work around this?
// Nope.  Once i had the previous loop, all I had to change was the array value that it was pulling
// to build up the new array object. 

//  - Now create a similar object as before, but with each date as the key and the total number of candies sold that day as the value.
function myFn () {
  var store = store1;
  var dates = Object.keys(store);
  var inventory = {};
  for (var i = 0; i < dates.length; i++) {
    var salesData = store[dates[i]];
    for (var j = 0; j < salesData.length; j++) {
      var candyName = dates[i];
      var candyQuantity = salesData[j][2];
      if ( !inventory[candyName] ) {
        inventory[candyName] = candyQuantity;
      } else {
      inventory[candyName] += candyQuantity;      
      };
    };
  };
  console.log(inventory);
};

//myFn();

//  - Use `Object.keys()` to loop over the inventory sold for a specific day in store3. While iterating over the data, create an object containg each candy's name and price.
function myFn2 () {
  var store = store3;
  for (var i = 0; i < store.length; i++) {
    var storeObjects = Object.keys(store[i]);
  };
};

//myFn2();
//  - Using the same technique, iterate over store2's sale dates data. Which day had the most total number of sales? How did you calculate this?
function myFn3 () {
  var store = store2;
  var counter = {};
  var saleDates = store['sale dates'];
  for (var key in saleDates) {
    for (var i = 0; i < saleDates[key].length; i++) {
      if ( !counter[saleDates[key]] ) {
        counter = saleDates[key][i];
      } else {
        counter += saleDates[key][i];
      };
    };
  };
  console.log(counter);
};

myFn3();

// #### After doing all of the above, see if you can do the following tasks:
//  - Create an array of the candies sold by store1 on January 10th.


//  - Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)


//  - Can you do the following inside of another loop to determine the total amount that store4 made?


//  - Determine how much money did store3 make on January 9th.


//  - Calculate how much they made from selling Dark Chocolate Crunchies across all the days.


//  - Create an object containing the amounts that store2 made by selling each type of candy.



// #### Questions to consider:
//  - Which store had the easiest data to access? Why? Did it depend on the task?


//  - How can the order of keys in a nested object make a specific task easier or harder?


//  - Can you think of a better way to store the data in order to keep track of the inventory sold?



// #### Stretch Goals: (these are hard!)
//  - For each store, create two objects. The first one will use the candy names as the keys and the value will be another object containing the sale price and the quantities sold. The second object will use the dates as the main key and each value will be an object with key-value pairs of each candy name and the money made selling that candy.


//  - Using the ideal data structure that you laid out before as a pattern, create functions to create new store data arrays from the existing data. This is called 'normalizing' the data - you are making it all consistent to ease future tasks.


//  - Build onto the previous functions by combining the data from the four separate stores so that you have a single set of data. Make sure that you don't lose any details from the initial data.


//  - After creating a function to combine the data, create two additional functions, `getInventoryCountSold()` and `getGrossProfit()` which respectively get the total numbers of items sold and the total dollars from sales. Each item can optionally take a type of candy to return the numbers about that candy. If there's no argument passed, it should return the total numbers for all candy types. For example, `getInventoryCountSold('Banana Bunches')` should return 12.


