import React, { useEffect } from 'react';
import { Layout, Divider, Row, Col, Skeleton } from 'antd';
import { getFishAction, FishItems } from 'context/fish';
import { useSelector, useDispatch } from 'libs/stores';
import { isEmpty } from 'q-utils-q';
import { SearchBar, Header, Card, CardSkeleton, ButtonAdd, ButtonSort, Footer, ModalContainer } from 'components';
import './style.scss'

const LayoutWrapper: React.FC = (): JSX.Element => {
  const d = useDispatch()
  const { list, loading } = useSelector((state: Storage) => state.fish)

  const fetchFish = async () => {
    await getFishAction(d);
  }

  useEffect(() => {
    fetchFish()
  }, [])


  console.log({ list });
  return (
    <React.Fragment>

      <SearchBar />
      <Header />
      <Layout id="wrapper-component">
        <Row justify="center">
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 0 }} xl={{ span: 18, offset: 0 }}>
            <Layout.Content className="__body shadow-md">
              <ButtonSort />
              <Divider style={{ margin: '12px 0' }} />
              <Row gutter={[16, 16]}>
                {loading && <CardSkeleton />}
                {!isEmpty(list) &&
                  list.map((item: FishItems, i: number) => (
                    <Col key={i} xs={24} sm={24} md={12} lg={12} xl={12}>
                      <Card item={item} />
                    </Col>
                  ))}
              </Row>
            </Layout.Content>
          </Col>
        </Row>
        <Footer />
      </Layout>
      <ButtonAdd />
      <ModalContainer />

    </React.Fragment>
  )
}

export default LayoutWrapper;