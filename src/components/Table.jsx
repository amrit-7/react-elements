import { Fragment } from "react";

const Table = ({ data, config }) => {
  const headings = config.map((data) => {
    if (data.header) {
      return <Fragment key={data.label}>{data.header()}</Fragment>;
    } else {
      return <th key={data.label}>{data.label}</th>;
    }
  });
  const tableData = data.map((oneData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.render(oneData)} className="p-2">
          {column.render(oneData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={oneData.id}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b">{headings}</tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

export default Table;
