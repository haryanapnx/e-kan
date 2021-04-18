import React, { useEffect } from 'react';
import { getFishAction } from 'context/fish';
import { useSelector, useDispatch } from 'libs/stores';
import { Layout } from 'antd';
import { SearchBar, Header, Card } from 'components';
import './style.scss'

const LayoutWrapper: React.FC = (): JSX.Element => {
  const d = useDispatch()
  const { list } = useSelector((state: Storage) => state.fish)

  const fetchFish = async () => {
    await getFishAction(d);
  }
  useEffect(() => {
    // fetchFish()
  }, [])


  console.log({ list });
  return (
    <Layout id="wrapper-component">
      <SearchBar />
      <Header />
      <Layout.Content className="__body">
        <div className="site-layout-content">
          <Card />
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
    </Layout>
  )
}

export default LayoutWrapper;