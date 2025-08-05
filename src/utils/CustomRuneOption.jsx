import { components } from "react-select";


export default function CustomRuneOption(props) {
  const { data } = props;

  return (
    <div
      data-tooltip-id="runes-tooltip"
      data-tooltip-content={data.description}
    >
      <components.Option {...props} />
    </div>
  );
}