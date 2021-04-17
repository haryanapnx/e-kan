import React, { useState, useEffect } from 'react'
import './style.scss'
import { Input, Space } from 'antd';

const SearchBar = () => {
  const [header, setHeader] = useState("")

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      setHeader("")
    } else if (window.scrollY > 70) {
      setHeader("fixed shadow")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <Space direction="horizontal" className="search-bar">
      <Input.Search
        placeholder="input search text"
        allowClear onSearch={() => { }}
        size="large"
      />
    </Space>
  )
}

export default SearchBar;