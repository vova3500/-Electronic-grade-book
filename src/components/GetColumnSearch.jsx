import React, { useState } from "react";

import { Input, Button, Space } from "antd";

import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const GetColumnSearch = (dataIndex) => {
  const [searchText, setSearchText] = useState(null);
  const [searchedColumn, setSearchedColumn] = useState(null);

  const onFilter = (value, record) =>
    record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : "";

  const onFilterDropdownVisibleChange = (visible) => {
    if (visible) {
      setTimeout(() => this.searchInput.select(), 100);
    }
  };

  const filterIcon = (filtered) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  );

  const filterDropdown = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => {
    <div style={{ padding: 8 }}>
      <Input
        ref={(node) => {
          this.searchInput = node;
        }}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>;
  };
  return <div></div>;
};

export default GetColumnSearch;
