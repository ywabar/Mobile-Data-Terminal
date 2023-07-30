import { useState, useEffect } from "react";

// {items: [], heading:string}
interface Props {
  identifier: string;
  closePopup?: () => void;
  onIdentifierChange?: (value: string) => void;
}

function Identifier({ closePopup, onIdentifierChange }: Props) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    //console.log(event.target.value);
    //console.log(inputValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(inputValue);
    handleInputChange;
    onIdentifierChange?.(inputValue);
    closePopup?.();
  };

  useEffect(() => {
    console.log(inputValue);
    //setInputValue("test " + inputValue);
  }, [inputValue]);

  return (
    <form id="identifierchooser" onSubmit={handleSubmit}>
      <h3>The identifier must be 3 digits.</h3>
      <h4>e.g. #101</h4>

      <input
        placeholder="Enter a Valid Identifier"
        onChange={handleInputChange}
      ></input>
      <button color="btn btn-secondary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Identifier;
