function calculatingSum(num1: number, num2: number) {
  console.log(num1 + num2);
}

calculatingSum(1, 2); // allowed here
// calculatingSum(1,"2")    //not allowed here

// Problems that typescript solve

// 1. gives type safety
// 2. show typo error
// 3. gives suggestion in objects promise's user.model (autocomplition)
