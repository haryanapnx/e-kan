import React from 'react';
import { SortAscendingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './styles.scss'

const ButtonSort: React.FC = (): JSX.Element => (
  <div className="sort-button">
    <Button
      type="default"
      shape="round"
      icon={<SortAscendingOutlined />}
    >
      SORT
      </Button>
  </div>
);

export default ButtonSort;
