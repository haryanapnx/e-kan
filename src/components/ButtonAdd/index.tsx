import React from 'react';
import { PlusCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import './styles.scss'

const ButtonAdd: React.FC = (): JSX.Element => (
  <div className="add-button">
    <Button type="primary" shape="round" icon={<PlusCircleFilled />} size="large">ADD</Button>
  </div>
);


export default ButtonAdd;
