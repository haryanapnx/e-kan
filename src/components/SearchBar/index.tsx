/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Input, Row, Col } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useVisible } from 'libs/use-visible';
import { isEmpty } from 'q-utils-q';
import './style.scss'

interface Props {
  handleChange: (v: any) => void
  value: string
}

const SearchBar: React.FC<Props> = ({ value, handleChange }) => {
  const node = useRef<any>(null);
  const getHistory: any = localStorage.getItem('history')
  const parseHistory = JSON.parse(getHistory)
  const [fixed, setFixed] = useState<string>("");
  const [history, setHistory] = useState<string[]>(parseHistory);
  const [searchVal, setSearch] = useState<string>('');

  const { ref, visible, setVisible } = useVisible(false);

  const listenScrollEvent = (): void => {
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
    localStorage.setItem('history', JSON.stringify(newHistory))
  }

  const handleSubmit = (e: any) => {
    const newHistory = [...parseHistory]
    newHistory.unshift(searchVal)
    const filtered = newHistory.filter((v, i, arr) => arr.indexOf(v) === i);
    setHistory(filtered)
    handleChange(searchVal)
    localStorage.setItem('history', JSON.stringify(filtered))
  }

  useEffect(() => {
  }, [history])

  useEffect(() => {
    if (isEmpty(getHistory)) {
      localStorage.setItem('history', JSON.stringify([]))
    }
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, []);

  return (
    <Row justify="center" >
      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 0 }} xl={{ span: 18, offset: 0 }}>
        <div id="search-bar">
          <div className={`top-bar ${fixed}`}>
            <h1>E-Kan</h1>
            <h2>Informasi harga ikan dan komoditas </h2>
            <div onClick={() => setVisible(!visible)}>
              <Input.Search
                ref={node}
                placeholder="Cari"
                allowClear
                onSearch={handleSubmit}
                onChange={(e: any) => setSearch(e.target.value)}
                value={searchVal}
                size="large"
                className={`${!fixed && "shadow"}`}
              />
              {visible && (
                <div ref={ref} className="history">
                  <b className="text-muted">History: </b>
                  { !isEmpty(history) ? history.slice(0, 3).map((item, i) => (
                    <div className="columns" key={i}>
                      <span className="list-item" onClick={() => setSearch(item)}>{item}</span>
                      <div onClick={() => removeHistory(i)} style={{ textAlign: "right" }}><CloseCircleOutlined /></div>
                    </div>
                  )) : <small className="text-muted">Tidak ada riwayat pencarian.</small>
                  }
                </div>
              )}

            </div>
          </div>
        </div>
      </Col>
    </Row>
    // </Layout.Header>
  )
}

export default SearchBar;