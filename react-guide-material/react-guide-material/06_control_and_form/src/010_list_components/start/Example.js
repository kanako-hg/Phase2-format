const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalsList = animals.map((animal) => <li>Hello, {animal}</li>);
  return (
    <>
      {/* <h3>配列の操作</h3>
      <ul>
        <li>{animals[0]}</li>
      </ul> */}
      {animalsList}
    </>
  );
};

export default Example;
