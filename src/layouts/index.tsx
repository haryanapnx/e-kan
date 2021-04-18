import React, { useEffect } from 'react';
import { Layout, Divider } from 'antd';
import { getFishAction } from 'context/fish';
import { useSelector, useDispatch } from 'libs/stores';
import { SearchBar, Header, Card, ButtonAdd, ButtonSort, Footer } from 'components';
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
      <Layout.Content className="__body shadow-md">
        <ButtonSort />
        <Divider style={{margin: '12px 0'}} />
        {[1, 2, 3, 4, 5].map(item => (
          <Card key={item} />
        ))}
      </Layout.Content>
      <ButtonAdd />
      <Footer />
    </Layout>
  )
}

export default LayoutWrapper;