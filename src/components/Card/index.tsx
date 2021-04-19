import React from 'react';
import moment from 'moment';
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

// const item = {
//   "uuid": "0c192840-7ee4-11ea-b3e1-e335da5df3hj",
//   "komoditas": "Cupang",
//   "area_provinsi": "JAWA BARAT",
//   "area_kota": "CIMAHI",
//   "size": "101",
//   "price": "20100",
//   "tgl_parsed": "2020-06-01T00:00:00+07:00",
//   "timestamp": "1590944400"
// }

interface Props {
  item: FishItems
}

const CardProduct: React.FC<Props> = ({ item }) => {

  const options = (
    <Menu onClick={() => { }}>
      <Menu.Item key="1" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />}>
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
        <Col xs={8} sm={8} md={8} lg={10} xl={12} className="columns v-middle">
          <Avatar
            size={{ xs: 100, sm: 130, md: 140, lg: 150, xl: 150, xxl: 160 }}
            src={product}
          />
        </Col>
        <Col xs={16} sm={16} md={16} lg={14} xl={12} className="content">
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
