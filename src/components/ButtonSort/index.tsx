import React from 'react';
import { SortAscendingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { showModal, ModalName } from 'context/modal';
import { useDispatch } from 'libs/stores';
import './styles.scss'

const ButtonSort: React.FC = (): JSX.Element => {
  const d = useDispatch()

  const handleSort = () => {
    showModal({ isOpen: true, name: ModalName.SORT, size: 500 }, d)
  }

  return (
    <div id="sort-button">
      <Button
        type="default"
        shape="round"
        icon={<SortAscendingOutlined />}
        onClick={handleSort}
        size="large"
      >
        SORT
      </Button>
    </div>
  )
};

export default ButtonSort;
