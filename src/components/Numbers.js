const Numbers = ({handleClick}) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
    ".",
    "c",
  ];
  return (
    <div>
      {buttons.map((button) => (
        <button onClick={handleClick} key={button}>{button}</button>
      ))}
    </div>
  );
};

export default Numbers;
