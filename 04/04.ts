//  Generics

function logValue<T>(value: T): T {
  console.log(value);
  return value;
}

logValue("12");

//  example
interface ages {
  age: number;
}

function highestAge<T extends ages>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 14 }, { age: 15 }, { age: 18 }, { age: 17 }];

console.log(highestAge(people));

// example

interface IPost {
  title: string;
  id: number;
  desription: string;
}

const fetchPostData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return await response.json();
};

(async () => {
  const posts = await fetchPostData<IPost[]>("/post");
})();
