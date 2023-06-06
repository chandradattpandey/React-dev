import { Addresses } from "../App";
interface Props {
  filterData: (allStates: string) => void;
}
const Filter = ({ filterData }: Props) => {
  return (
    <div className="all-state">
      <select onChange={(event) => filterData(event.target.value)}>
        <option value="">Select Address</option>
        {Addresses.map((address) => (
          <option key={address} value={address}>
            {address}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
