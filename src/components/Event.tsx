import Button from "./Button.tsx";

interface Props {
  description?: string;
  location?: string;
  logs?: string;
  title?: string;
  id?: string;
}

function Event({ description, location, logs, title, id }: Props) {
  return <div id="status">The current status is set to: {id}</div>;
}

export default Event;
