import React from 'react';
import moment from 'moment';
import { useDispatch } from 'libs/stores';
import { showModal, ModalName } from 'context/modal';
import { Card, Row, Col, Avatar, Dropdown, Menu } from 'antd';
import {
  EnvironmentOutlined,
  TagOutlined,
  MoreOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
  EditOutlined
} from '@ant-design/icons';
import { product } from 'commons/images';
import { FishItems } from 'context/fish';
import { convertCurrency } from 'q-utils-q';
import './style.scss';

interface Props {
  item: FishItems | any
}

const CardProduct: React.FC<Props> = ({ item }) => {
  const d = useDispatch()
  const editData = () => {
    showModal({ isOpen: true, name: ModalName.ADD_FISH, size: 1300, data: item, other: 'edit' }, d)
  }

  const deleteData = () => {
    showModal({ isOpen: true, name: ModalName.DELETE_FISH, size: 600, data: item.uuid }, d)
  }

  const options = (
    <Menu>
      <Menu.Item onClick={editData} key="1" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item onClick={deleteData} key="2" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      bodyStyle={{ padding: '0' }}
      id="card-product"
      bordered={false}
      className="shadow"
    >
      <Row align="middle">
        <Col xs={6} sm={8} md={8} lg={8} xl={8} className="columns v-middle">
          <Avatar
            size={{ xs: 100, sm: 120, md: 130, lg: 130, xl: 150, xxl: 160 }}
            src={product}
          />
        </Col>
        <Col xs={18} sm={16} md={16} lg={16} xl={16} className="content">
          <div className="content-top columns h-top">
            <div>
              <div className="title">{item.komoditas}</div>
              <div >Size: {item.size}</div>
              <div className="location">
                <EnvironmentOutlined /> {item.area_kota}, {item.area_provinsi}
              </div>
            </div>
            <Dropdown overlay={options}>
              <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <MoreOutlined style={{ fontSize: 22, fontWeight: 600, color: 'grey' }} />
              </div>
            </Dropdown>

          </div>
          <div className="content-bottom columns ">
            <div className="date">
              <FieldTimeOutlined /> {moment(item.tgl_parsed).format('ddd, D MMMM YYYY')}
            </div>
            <span className="price">
              <TagOutlined /> {convertCurrency(Number(item.price), "Rp")}
            </span>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default CardProduct;
