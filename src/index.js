import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { TreeSelect } from "antd/lib";

const treeData1 = [
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
        key: "0-0-255",
        alias: "prueba"
      }
    ]
  },
  {
    label: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        label: "Child Node1",
        value: "Child Node 1",
        key: "0-0-13a",
        alias: "prueba"
      },
      {
        label: "Child Node2",
        value: "0-0-2",
        key: "0-0-23a",
        alias: "prueba"
      }
    ]
  }
];

const treeData2 = [
  {
    label: "Node1",
    value: "0-0",
    key: "0-02",
    children: [
      {
        label: "Child Node1",
        value: "Child Node 1",
        key: "0-0-12",
        alias: "prueba"
      },
      {
        label: "Child Node2",
        value: "0-0-2",
        key: "0-0-22",
        alias: "prueba"
      }
    ]
  },
  {
    label: "Node2",
    value: "0-1",
    key: "0-12",
    children: [
      {
        label: "Child Node1",
        value: "Child Node 1",
        key: "0-0-13c",
        alias: "prueba"
      },
      {
        label: "Child Node2",
        value: "0-0-2",
        key: "0-0-23c",
        alias: "prueba"
      }
    ]
  }
];

const treeData3 = [
  {
    label: "Node1",
    value: "0-0",
    key: "0-03",
    children: [
      {
        label: "Child Node1",
        value: "Child Node 1",
        key: "0-0-13",
        alias: "prueba"
      },
      {
        label: "Child Node2",
        value: "0-0-2",
        key: "0-0-23",
        alias: "prueba"
      }
    ]
  },
  {
    label: "Node2",
    value: "testsss",
    key: "0-13",
    children: [
      {
        label: "Child Node1",
        value: "Child Node 1",
        key: "0-0-13b",
        alias: "prueba"
      },
      {
        label: "Child Node2",
        value: "0-0-2",
        key: "0-0-23b",
        alias: "prueba"
      }
    ]
  }
];

class Demo extends React.Component {
  state = {
    value: undefined,
    value2: undefined,
    value3: undefined
  };
  onChange = value => {
    console.log(arguments);
    this.setState({ value });
    console.log(value);
  };
  onChange2 = value => {
    console.log(arguments);
    this.setState({ value2: value });
    console.log(value);
  };
  onChange3 = value => {
    console.log(arguments);
    this.setState({ value3: value });
    console.log(value);
  };
  render() {
    return (
      <div>
        <div>
          <p>
            La selección se hace hasta el final del arbol y todo lo anterior
            queda marcado
          </p>
          <TreeSelect
            style={{ width: 300 }}
            value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData1}
            placeholder="Please select"
            treeDefaultExpandAll
            treeCheckable={true}
            treeCheckStrictly={false}
            onChange={this.onChange}
            multiple
          />
        </div>
        <br />
        <br />
        <div>
          <p>
            La selección es totalmente libre. No obliga a marcar hasta el fin
            del árbol, se debe marcar todo explicitamente.
          </p>
          <TreeSelect
            style={{ width: 300 }}
            value={this.state.value2}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData2}
            placeholder="Please select"
            treeDefaultExpandAll
            treeCheckable={true}
            treeCheckStrictly={true}
            onChange={this.onChange2}
            multiple
          />
        </div>
        <div>
          <p>Este segundo caso, quizá encajaría mejor sin checkbox</p>
          <TreeSelect
            style={{ width: 300 }}
            value={this.state.value3}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData3}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={this.onChange3}
            multiple={true}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
