import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { TreeSelect } from "antd/lib";

const treeData = [
  {
    label: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        label: "Child Node1",
        value: "Child Node 1",
        key: "0-0-1",
        alias: "prueba"
      },
      {
        label: "Child Node2",
        value: "0-0-2",
        key: "0-0-2",
        alias: "prueba"
      }
    ]
  },
  {
    label: "Node2",
    value: "0-1",
    key: "0-1"
  }
];

class Demo extends React.Component {
  state = {
    value: undefined
  };
  onChange = value => {
    console.log(arguments);
    this.setState({ value });
    console.log(value);
  };
  render() {
    return (
      <TreeSelect
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
        multiple
      />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
