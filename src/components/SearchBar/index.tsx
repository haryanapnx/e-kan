import React, { useState, useEffect } from 'react'
import './style.scss'
import { Input } from 'antd';

const SearchBar: React.FC = () => {
  const [fixed, setFixed] = useState("")

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      setFixed("")
    } else if (window.scrollY > 70) {
      setFixed("fixed shadow")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div id="search-bar">
      <div className={`top-bar ${fixed}`}>
        <Input.Search
          placeholder="Search"
          allowClear onSearch={() => { }}
          size="large"
        />
      </div>
    </div>
  )
}

export default SearchBar;