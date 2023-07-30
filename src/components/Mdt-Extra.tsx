import Button from "./Button.tsx";

interface Props {
  focus?: string;
  onFocusChange?: (value: string) => void;
}

function Extra({ focus, onFocusChange }: Props) {
  const handleStatusButtonClick = (value: string) => {
    onFocusChange?.(value);
  };
  return (
    <div id="focus">
      <hr></hr>
      <div id="choosestatus">
        <Button
          color={focus === "Event" ? "dark" : "secondary"}
          onClick={() => handleStatusButtonClick("Event")}
        >
          Event
        </Button>
        <Button
          color={focus === "Person Search" ? "dark" : "secondary"}
          onClick={() => handleStatusButtonClick("Person Search")}
        >
          Person Search
        </Button>

        <Button
          color={focus === "Vehicle Search" ? "dark" : "secondary"}
          onClick={() => handleStatusButtonClick("Vehicle Search")}
        >
          Vehicle Search
        </Button>

        <Button
          color={focus === "Lookouts" ? "dark" : "secondary"}
          onClick={() => handleStatusButtonClick("Lookouts")}
        >
          Lookouts
        </Button>
      </div>
    </div>
  );
}

export default Extra;
