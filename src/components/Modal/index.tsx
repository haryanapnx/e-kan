import React from "react";
import { Modal } from 'antd';
import { resetModal } from "context/modal";
import { useDispatch, useSelector } from "libs/stores";
import { renderChildren } from './helper'

const ModalContainer: React.FC = () => {
  const dispatch = useDispatch()

  const modal = useSelector((state: any) => state.modal)

  const toggle = () => resetModal(dispatch);

  return (
    <Modal
      title={modal.title}
      centered
      visible={modal.isOpen}
      onOk={toggle}
      onCancel={toggle}
      width={modal.size}
      footer={null}
      bodyStyle={{ padding: 0 }}
      forceRender={true}
    >
      {renderChildren(modal.name, modal, toggle)}
    </Modal>
  )
}

export default ModalContainer;