import { Button, Table } from "antd";

interface Props {
  userData: any;
  onDelete: (id: number) => void;
}

const DataTable = ({ userData, onDelete }: Props) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_: any, row: any) => (
        <Button type="primary" danger onClick={() => onDelete(row.id)}>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
      {userData && (
        <Table rowKey="id" dataSource={userData} columns={columns} />
      )}
    </>
  );
};

export default DataTable;
