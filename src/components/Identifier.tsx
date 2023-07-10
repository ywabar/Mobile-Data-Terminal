import Button from "./Button.tsx";

// {items: [], heading:string}
interface Props {
  identifier: string;
  closePopup?: () => void;
  submittion?: () => void;
}

function Identifier({ identifier, closePopup, submittion }: Props) {
  return (
    <form id="identifierchooser">
      <h3>The identifier must be 3 digits.</h3>
      <h4>e.g. #101</h4>

      <input placeholder="Enter a Valid Identifier"></input>
      <Button onClick={closePopup} color="secondary">
        Submit
      </Button>
    </form>
  );
}

export default Identifier;
