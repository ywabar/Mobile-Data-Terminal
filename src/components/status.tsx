import Button from "./Button.tsx";

interface Props {
  status?: string;
  onStatusChange?: (value: string) => void;
}

function Status({ status, onStatusChange }: Props) {
  const handleStatusButtonClick = (value: string) => {
    onStatusChange?.(value);
  };
  return (
    <div id="status">
      The current status is set to: {status}
      <div id="choosestatus">
        <Button
          color={status === "In Service" ? "dark" : "secondary"}
          onClick={() => handleStatusButtonClick("In Service")}
        >
          In Service
        </Button>
        <Button
          color={status === "Busy" ? "dark" : "secondary"}
          onClick={() => handleStatusButtonClick("Busy")}
        >
          Busy
        </Button>
        <Button
          onClick={() => handleStatusButtonClick("Out of Service")}
          color={status === "Out of Service" ? "dark" : "secondary"}
        >
          Out of Service
        </Button>
      </div>
    </div>
  );
}

export default Status;
