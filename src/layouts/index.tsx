import { Layout} from 'antd';
import { SearchBar, Header } from 'components';
import './style.scss'

const LayoutWrapper = () => {
  return (
    <Layout id="wrapper-component">
      <SearchBar />
      <Header />
      <Layout.Content className="__body">
        <div className="site-layout-content"></div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
    </Layout>
  )
}

export default LayoutWrapper;