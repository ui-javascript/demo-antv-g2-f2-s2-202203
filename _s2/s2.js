import React, { useState } from "react";
import ReactDOM from "react-dom";

// import zhCN from 'antd/es/locale/zh_CN';
import "antd/dist/antd.css";

import { PivotSheet } from "@antv/s2";

function App() {
  const container = document.getElementById("container");

  const s2DataConfig = {
    fields: {
      rows: ["province", "city"],
      columns: ["type"],
      values: ["price"],
    },
    data: [
      {
        province: "浙江",
        city: "杭州",
        type: "笔",
        price: "1",
      },
      {
        province: "浙江",
        city: "杭州",
        type: "纸张",
        price: "2",
      },
      {
        province: "浙江",
        city: "舟山",
        type: "笔",
        price: "17",
      },
      {
        province: "浙江",
        city: "舟山",
        type: "纸张",
        price: "0.5",
      },
      {
        province: "吉林",
        city: "丹东",
        type: "笔",
        price: "8",
      },
      {
        province: "吉林",
        city: "白山",
        type: "笔",
        price: "9",
      },
      {
        province: "吉林",
        city: "丹东",
        type: " 纸张",
        price: "3",
      },
      {
        province: "吉林",
        city: "白山",
        type: "纸张",
        price: "1",
      },
    ],
  };

  const s2Options = {
    width: 600,
    height: 600,
  };

  const s2 = new PivotSheet(container, s2DataConfig, s2Options);
  s2.render();

  return <div id="container">Demo</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
