import React, { useState } from 'react'
import { useSelector, useDispatch } from 'libs/stores';
import { FishTypes } from 'context/fish';
import { Radio, Button, Space } from 'antd';
import { sortlist } from 'utils/sorting';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { listSort } from './constant';
import './style.scss';

interface Props {
  toggle: () => void
}

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const Sort: React.FC<Props> = ({ toggle }) => {
  const getSort: any = localStorage.getItem('sort')
  const dispatch = useDispatch()
  const { list } = useSelector((state: Storage) => state.fish)

  const sortValue = JSON.parse(getSort);
  const [name, setName] = useState(sortValue?.name)

  const onChange = (e: any) => setName(e.target.value);

  const handleSort = (name: string, type: string) => {
    const item = JSON.stringify({ name, type })
    localStorage.setItem('sort', item)
    if (name === 'default') {
      setName('default');
    }
    const payload = sortlist(list, name, type)
    dispatch({ type: FishTypes.SET_FISH, payload });
    toggle()
  }

  const isDefault = name === 'default';

  return (
    <div id="sort">
      <h3>Urutkan Berdasarkan</h3>
      <div className="radio">
        <Radio.Group onChange={onChange} value={name}>
          {listSort.map((item: any, i: number) => (
            <Radio key={i} style={radioStyle} value={item.value}>
              {item.label}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className="button">
        <Space size="large" align="baseline">
          <Button disabled={isDefault} shape="round" onClick={() => handleSort(name, 'asc')} icon={<SortAscendingOutlined />}>Ascending</Button>
          <Button disabled={isDefault} shape="round" onClick={() => handleSort(name, 'desc')} icon={<SortDescendingOutlined />}>Descending</Button>
          <Button shape="round" onClick={() => handleSort('default', 'desc')} >Reset</Button>
        </Space>
      </div>
    </div>
  );
}

export default Sort;