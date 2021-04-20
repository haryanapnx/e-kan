/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Layout, Divider, Row, Col, Empty, BackTop } from 'antd';
import { getFishAction, FishItems } from 'context/fish';
import { useSelector, useDispatch } from 'libs/stores';
import { isEmpty } from 'q-utils-q';
import { SearchBar, Header, Card, CardSkeleton, ButtonAdd, ButtonSort, Footer, ModalContainer } from 'components';
import './style.scss'

const LayoutWrapper: React.FC = (): JSX.Element => {
  const d = useDispatch()
  const [fixed, setFixed] = useState<string>("columns");
  const [fishList, setFishList] = useState<any>([])
  const [search, setSearch] = useState<string>("");
  const { list, loading } = useSelector(({ fish }: Storage) => fish)

  const fetchFish = async () => {
    await getFishAction(d);
  }

  useEffect(() => {
    fetchFish()
  }, [])

  useEffect(() => {
    setFishList(list)
  }, [list]);

  const listenScrollEvent = (): void => {
    if (window.scrollY < 800) {
      setFixed("columns")
    } else if (window.scrollY > 800) {
      setFixed("fixed")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  }, []);

  const listItem = fishList.filter((item: FishItems) =>
    JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <SearchBar value={search} handleChange={(v: any) => setSearch(v)} />
      <Header />
      <Layout id="wrapper-component">
        <Row justify="center" style={{background:'unset'}}>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 0 }} xl={{ span: 18, offset: 0 }}>
            <Layout.Content className="__body shadow-md">
              <div className={fixed}>
                <ButtonAdd />
                <ButtonSort />
              </div>
              <Divider style={{ margin: '12px 0' }} />
              <Row gutter={[16, 16]}>
                {loading && <CardSkeleton />}
                {!isEmpty(listItem) ?
                  listItem.map((item: FishItems, i: number) => (
                    <Col key={i} xs={24} sm={24} md={12} lg={12} xl={12}>
                      <Card item={item} />
                    </Col>
                  )) : <Empty className="empty" />}
              </Row>
            </Layout.Content>
          </Col>
        </Row>
        <Footer />
      </Layout>

      <BackTop />
      <ModalContainer />
    </React.Fragment>
  )
}

export default LayoutWrapper;