// Type Alias

const value: number = 10;
const value2: string = "abc";
const value3: Array<number> = [1, 2, 3];
const value4: Array<string> = ["1", "2", "3"];
const value5: boolean = false;

type User = {
  name: string;
  age: number;
  address?: string;
};
const user: User = {
  name: "kunal",
  age: 12,
};

// function return type

function userFn(data: User): User {
  return data;
}

userFn(user);

// union type
const value6: string | number = 12;
