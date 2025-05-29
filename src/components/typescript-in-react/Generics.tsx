type ViewMode = "grid" | "list";

const storedMode = (localStorage.getItem("viewMode") || "grid") as ViewMode;

//generics

// in arrow function JSX compiler thinx that <T> is a react component, thats why we need coma
const convertToArray = <T,>(value: T): T[] => {
  return [value];
};
function convertToArray2<T>(value: T): T[] {
  return [value];
}

//no need to write coma if simple function, not arrow
convertToArray(5);
convertToArray("hey");

//react generic

type ButtonProps<T> = {
  count: T;
  countHistory: T[];
};

export default function Button4<T>({ count, countHistory }: ButtonProps<T>) {
  return <button>button with generics.</button>;
}
