// Variables
const Variables = () => {
  // [1] Var
  x = 10;
  var x; // No Problem Here It Will Write x Value
  // [2] const
  const y = 15; // We Can't reDiclere the variable in code And We Can't change the Variable Value
  // [4] let
  let z = 20;
  z = 10; // We Can reDiclere And We Can ReAssignment the Variable Value Like That
  console.log("x:" + x + "y:" + y + "z:" + z);
};
// ArrowFunctions
const ArrowFunction = () => {
  // [1]Relazition Ship
  const sum = (num) => num + 5;
  console.log(sum(10));

  // [2]Relazition Ship
  const sum2 = (num) => console.log(num);
  sum2(20);

  // [3]Relazition Ship
  const sum3 = (num) => {
    console.log(num);
  };
  sum3(50);
  // [4]Relazition Ship
  const sum4 = (num1, num2) => {
    return num1 + num2;
  };
  console.log(sum4(10, 50));
};
// Classes
const Classes = () => {
  // Super Class
  class car {
    name;
    color;
    year;
    price;

    constructor(name, color, year, price) {
      this.name = name;
      this.color = color;
      this.year = year;
      this.price = price;
    }
    getData() {
      console.log(
        "Name : " +
          this.name +
          "\nColor : " +
          this.color +
          "\nYear : " +
          this.year +
          "\nPrice : " +
          this.price +
          "$"
      );
    }
  }
  // Sub Class
  class bmw extends car {
    // eslint-disable-next-line no-useless-constructor
    constructor(name, color, year, price) {
      super(name, color, year, price);
    }
  }
  // Sub Class
  class Merc extends car {
    // eslint-disable-next-line no-useless-constructor
    constructor(name, color, year, price) {
      super(name, color, year, price);
    }
  }
  let BMW = new bmw("Bmw", "Red", "1995", 5000);
  let MERC = new Merc("Mercedec", "Yellow", "2015", 9000);
  BMW.getData();
  MERC.getData();
};
// Spread[...]
const Spread = () => {
  // Spread With Arrays
  const Arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Arr2 = [...Arr1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  console.log("Old Array : " + Arr1 + "\nNew Array : " + Arr2);
  // Spread With EnLinmited Paramters
  const fun = (...args) => {
    console.log(args.length); // Write Howmatch Parameter Its Seending
    console.log(
      "Args[1] : " +
        args[0] +
        "\nArgs[2] : " +
        args[1] +
        "\nArgs[3] : " +
        args[2] +
        "\nArgs[4] : " +
        args[3]
    );
  };
  fun("Ali", "2005", "Syria", "Aleppo");
};
// DeStructions
const Destructions = () => {
  // Destructions With Arrays
  // [1]
  const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [x, y, z] = Arr;
  console.log(x, y, z);
  // [2]
  const [, , , b] = Arr;
  console.log(b);
  // Destructions With Objects
  const ob = {
    id: 1,
    name: "Muhammed",
  };
  var { name } = ob;
  console.log(name);
  var { id, name } = ob;
  console.log(id, name);
};
// Primitive Type
const PrimitiveType = () => {
  const Object = {
    id: 1,
    name: "Muhammed",
  };
  console.log(Object.name);
  const newObject = Object;
  newObject.name = "Ali";
  console.log(newObject.name);
};
// ArrayFunctions //
// [1] Map()
const Map = () => {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newArray = Array.map((item) => {
    return item + item ** 2;
  });
  console.log(newArray);
};
// [2] Slice()
const Slice = () => {
  const arrayOne = ["apple", "banana", "cherry"];
  const copyOfArryTwo = [...arrayOne].slice(0, 2);
  const FirstItem = arrayOne.slice(0, 1);
  const LastItem = arrayOne.slice(-1);
  console.log("Original:", arrayOne);
  console.log("Copy:", copyOfArryTwo);
  console.log("FirstItem:", FirstItem);
  console.log("LastItem:", LastItem);
};
// [3] Splice()
const Splice = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mangoes"];
  const newFruit = fruits.splice(2);
  console.log(fruits);
  console.log(newFruit);
};
// [4] ReVerse()
const Reverse = () => {
  const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Rnums = Nums.reverse();
  console.log("Nums : " + Nums);
  console.log("Reversed Nums : " + Rnums);
};
// [5] Concat()
const Concat = () => {
  const Arr1 = [1, 2, 3, 4, 5];
  const Arr2 = ["a", "b", "c", "d", "e"];
  const ConcatArray = Arr1.concat(Arr2);
  console.log("ConcatArray : " + ConcatArray);
};
// [6] Join()
const Join = () => {
  const Array = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"];
  const string = Array.join("-");
  console.log("Join Array :" + string);
};
// [7] Filter()
const Filter = () => {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Items = Array.filter((item) => item >= 5);
  console.log("Filter Array :" + Items.join("-"));
};
// [8] Reduce()
const Reduce = () => {
  //Without Initial Value
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Redu = Array.reduce((total, curent) => total + curent);
  console.log("Reduce Array :" + Redu);
  //With Initial Value
  const ReduceArray = Array.reduce((total, curent) => total + curent, 5); // reduce((fumction),(initial value))
  console.log("Reduce Array:", ReduceArray);
};
// [9] Find()
const Find = () => {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const FindItem = Array.find((item) => item > 6); // Get Just First Item
  console.log("Find Array : " + FindItem);
};
// [10] Sort()
const Sort = () => {
  // Asc Sorting
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const AscSort = Array.sort((a, b) => {
    if (a < b) return 1;
    if (b < a) return -1;
  });
  console.log("ASC Sort Array : " + AscSort);
  // DESC Sorting
  const DescSort = Array.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
  });
  console.log("DESC Sort Array : " + AscSort);
};
// Higher Order Functions //
// [1] Receive A Function Inside A Function As An Parameter
const PFunction = () => {
  const lowerCace = (str) => {
    return str.toLowerCase();
  };
  const Transform = (word, fn) => {
    return fn(word);
  };
  console.log(Transform("MUHAMMED", lowerCace));
};
// [2] Returning a function within a function
const FIFunction = () => {
  const Sayhi = (hi) => {
    return (name) => {
      console.log(`${hi} ${name}`);
    };
  };
  const Name = Sayhi("Hi");
  console.log(Name("Muhammed"));
};
// Promise
// [1]Way
const FPromise = () => {
  let MyPromise = new Promise((success, error) => {
    const x = 0;
    if (x === 0) {
      success("It's Success");
    } else {
      error("It's Error");
    }
  });
  MyPromise.then(
    (resolve) => console.log(resolve),
    (rejecte) => console.log(rejecte)
  );
};
//[2]Way
const SPromise = () => {
  let myPromise = new Promise((success, error) => {
    let x = 1;
    if (x === 0) {
      success("It's Success");
    } else {
      error("It's Error");
    }
  }).then(
    (resolve) => console.log(resolve),
    (rejecte) => console.log(rejecte)
  );
};
// Normal Multi Promise
const NMultiPromise = () => {
  let eat = true;
  let play = true;
  let sleep = true;
  const eating = new Promise((success, error) => {
    if (eat) {
      success("I am Eating");
    } else {
      error("I am Not Eating");
    }
  });
  const Playing = new Promise((success, error) => {
    if (play) {
      success("I am Playing");
    } else {
      error("I am Not Playing");
    }
  });
  const Sleeping = new Promise((success, error) => {
    if (sleep) {
      success("I am Sleeping");
    } else {
      error("I am Not Sleeping");
    }
  });
  eating.then(
    (resolve) => console.log(resolve),
    (rejecte) => console.log(rejecte)
  );
  Playing.then(
    (resolve) => console.log(resolve),
    (rejecte) => console.log(rejecte)
  );
  Sleeping.then(
    (resolve) => console.log(resolve),
    (rejecte) => console.log(rejecte)
  );
};
// Multi Promise
const MultiPromise = () => {
  let eat = true;
  let play = false;
  let sleep = true;
  const Eating = new Promise((success, error) => {
    if (eat) {
      success("I am Eating");
    } else {
      error("I am Not Eating");
    }
  });
  const Playing = new Promise((success, error) => {
    if (play) {
      success("I am Playing");
    } else {
      error("I am Not Playing");
    }
  });
  const Sleeping = new Promise((success, error) => {
    if (sleep) {
      success("I am Sleeping");
    } else {
      error("I am Not Sleeping");
    }
  });
  Eating.then(
    (resolve) => {
      console.log(resolve);
      Playing.then(
        (resolve) => {
          console.log(resolve);
          Sleeping.then(
            (resolve) => {
              console.log(resolve);
            },
            (rejecte) => console.log(rejecte)
          );
        },
        (rejecte) => console.log(rejecte)
      );
    },
    (rejecte) => console.log(rejecte)
  );
};
// Async,Await
const AsyncAwait = () => {
  let eat = true;
  let play = true;
  let sleep = false;
  const Eating = () => {
    return new Promise((success, error) => {
      if (eat) {
        success("I am Eating");
      } else {
        error("I am Not Eating");
      }
    });
  };
  const Playing = () => {
    return new Promise((success, error) => {
      if (play) {
        success("I am Playing");
      } else {
        error("I am Not Playing");
      }
    });
  };
  const Sleeping = () => {
    return new Promise((success, error) => {
      if (sleep) {
        success("I am Sleeping");
      } else {
        error("I am Not Sleeping");
      }
    });
  };
  const run = async () => {
    try {
      const EatingMessage = await Eating();
      console.log(EatingMessage);
      const PlayingMessage = await Playing();
      console.log(PlayingMessage);
      const SleepingMessage = await Sleeping();
      console.log(SleepingMessage);
    } catch (error) {
      console.log(error);
    }
  };
  run();
};

export {
  Variables,
  ArrowFunction,
  Classes,
  Spread,
  Destructions,
  PrimitiveType,
  Map,
  Slice,
  Splice,
  Reverse,
  Concat,
  Join,
  Filter,
  Reduce,
  Find,
  Sort,
  PFunction,
  FIFunction,
  FPromise,
  SPromise,
  NMultiPromise,
  MultiPromise,
  AsyncAwait,
};
