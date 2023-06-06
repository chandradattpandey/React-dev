import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Nav from "./components/nav";
import TextComp from "./components/Text";
import ReactForm from "./form/ReactForm";
import DataTable from "./form/DataTable";
import FilterComp from "./form/Filter";

export const Addresses = [
  "Almora",
  "Bhopal",
  "Delhi",
  "Noida",
  "Gurugram",
  "Uttarakhand",
  "Haryana",
];

function App() {
  const result = [
    {
      id: 1,
      name: "Chandra",
      age: 24,
      gender: "male",
      address: "Almora",
      key: 1,
    },
    {
      id: 2,
      name: "Tarun",
      age: 26,
      gender: "male",
      address: "Bhopal",
      key: 2,
    },
  ];
  const [address, setAddress] = useState("");
  const [userData, setUserData] = useState(result);
  const name = "Click me";
  const maxCount = 100;
  const [data, setData] = useState(["happy "]);

  const addData = () => {
    setData([...data, "Item-Add "]);
  };

  const removeData = () => {
    const shortArr = data.filter((item) => item !== "Item-updated ");
    setData(shortArr);
  };

  const updateData = () => {
    const newArr = data.map((item) =>
      item == "Item-Add " ? "Item-updated " : item
    );
    setData(newArr);
  };

  const userDelete = (id: number) => {
    const users = userData.filter((user) => user.id !== id);
    setUserData(users);
  };

  const isAddress = address
    ? userData.filter((e) => e.address === address)
    : userData;
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>React Form</h2>
      <ReactForm
        onSubmit={(data) => {
          setUserData([...userData, { ...data, id: userData.length + 1 }]);
        }}
      ></ReactForm>
      <FilterComp
        filterData={(allState) => {
          setAddress(allState);
        }}
      ></FilterComp>
      <DataTable userData={isAddress} onDelete={userDelete} />
      <Button text={name}></Button>
      <Nav count={data.length}></Nav>
      <div>{data}</div>
      &nbsp;
      <button className="btn btn-light" onClick={addData}>
        Add
      </button>
      &nbsp;
      <button className="btn btn-light" onClick={updateData}>
        Update
      </button>
      &nbsp;
      <button className="btn btn-light" onClick={removeData}>
        Remove
      </button>
      <br />
      <TextComp maxCount={maxCount}></TextComp>
    </>
  );
}

export default App;
