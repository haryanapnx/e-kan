import React from 'react';
import { PlusCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { showModal, ModalName } from 'context/modal';
import { useDispatch } from 'libs/stores';
import './styles.scss'

const ButtonAdd: React.FC = (): JSX.Element => {
  const d = useDispatch()

  const setModal = () => {
    showModal({ isOpen: true, name: ModalName.ADD_FISH, size: 1300 }, d)
  }

  return (
    <div id="add-button">
      <Button
        onClick={setModal}
        type="primary"
        shape="round"
        icon={<PlusCircleFilled />}
        size="large"
      >
        ADD
        </Button>
    </div>
  )
};

export default ButtonAdd;
