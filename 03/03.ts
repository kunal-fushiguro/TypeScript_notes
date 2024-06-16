// Interface

interface Model {
  name: string;
  userName: string;
  password: string;
  email: string;
}

const newUser: Model = {
  name: "kunal",
  email: "k@gmail.com",
  password: "1234567",
  userName: "kunu",
};
// example
interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 455,
};

const transaction2: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 456,
};

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "John Doe",
  balance: 4000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// Extends

interface book {
  name: string;
  price: number;
}

interface audioBook extends book {
  format: string;
  duration: string;
}

const book: audioBook = {
  name: "atomic habits",
  price: 200,
  format: "mp3",
  duration: "1 hour +",
};

//  merging two interface

interface obj {
  name: string;
  username: string;
}
interface obj {
  password: string;
}

const user: obj = {
  name: "k",
  username: "k",
  password: "k",
};
