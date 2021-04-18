import React from 'react';
import { Layout } from 'antd';

const Footer: React.FC = (): JSX.Element => (
  <Layout.Footer style={{ textAlign: 'center', padding: '1rem' }}>
    <small>
      Copyright @2021 by
      <a href="https://hary.fun" target="blank"> haryfun_</a>
    </small>
  </Layout.Footer>
);

export default Footer;