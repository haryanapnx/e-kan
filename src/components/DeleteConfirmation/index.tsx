import React from 'react'
import { Button, Space, Row, Col } from 'antd';
import { deleteFish } from 'context/fish'
import { useDispatch, useSelector } from 'libs/stores';

interface Props {
  data: string,
  toggle: () => void
}

const DeleteConfirmation: React.FC<Props> = ({ data, toggle }) => {
  const d = useDispatch()
  const { loadingDelete } = useSelector(state => state.fish)

  const handleDelete = async () => {
    await deleteFish(data, d)
  }

  return (
    <Row justify="center" align="middle" gutter={[48, 48]} style={{ padding: '3rem', textAlign: 'center' }}>
      <Col>
        <h3>Apakah anda yakin ingin menghapusnya ?</h3>
        <br />
        <Space size="large">
          <Button onClick={handleDelete} danger loading={loadingDelete}>Hapus</Button>
          <Button onClick={toggle} loading={loadingDelete} type="primary">Batalkan</Button>
        </Space>
      </Col>
    </Row>
  );
};

export default DeleteConfirmation