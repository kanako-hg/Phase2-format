const AnimalList = ({ animals }) => {
  <ul>
    {animals.map((animal) => {
      return (
        <li key={animal}>
          {animal}
          {animal === "Dog" && "★"}
        </li>
      );
    })}
  </ul>;
};

export default AnimalList;
