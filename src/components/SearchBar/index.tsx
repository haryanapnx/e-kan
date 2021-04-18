import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useComponentVisible } from 'libs/use-component-visible';
import './style.scss'

const SearchBar: React.FC = () => {
  const node = useRef<any>(null);
  const [fixed, setFixed] = useState<string>("");
  const [history, setHistory] = useState<string[]>(["cupang", "gapi"]);
  const [search, setSearch] = useState<string>("");

  const { ref, visible, setVisible } = useComponentVisible(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      setFixed("")
    } else if (window.scrollY > 70) {
      setFixed("fixed shadow")
    }
  }

  const removeHistory = (i: number) => {
    let newHistory = [...history];
    newHistory.splice(i, 1);
    setHistory(newHistory);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, []);

  return (
    <div id="search-bar">
      <div onClick={() => setVisible(!visible)} className={`top-bar ${fixed}`}>
        <Input.Search
          ref={node}
          placeholder="Cari"
          allowClear
          onSearch={() => { }}
          onChange={(e: any) => setSearch(e.target.value)}
          value={search}
          size="large"
          className={`${!fixed && "shadow"}`}
        />
        {visible && (
          <div ref={ref} className="history">
            { history.length ? history.map((item, i) => (
              <div className="columns" key={i}>
                <span className="list-item" onClick={() => setSearch(item)}>{item}</span>
                <div onClick={() => removeHistory(i)} style={{ textAlign: "right" }}><CloseCircleOutlined /></div>
              </div>
            )):(
              <small className="text-muted">Tidak ada riwayat pencarian.</small>
            )
          }
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar;