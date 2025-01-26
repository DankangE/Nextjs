'use client'

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { RootMenuList, RootSiderMenuList } from "./Menu";
import Title from "antd/es/typography/Title";

interface RootContentLayoutProps {
  children: React.ReactNode;
}

export default function RootContentLayout({ children }: RootContentLayoutProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <Layout>
      <Layout.Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}>
        <Title level={4}>Dankang_Blog</Title>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={RootMenuList}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={RootSiderMenuList}
          />
        </Layout.Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          {children}
        </Layout>
      </Layout>
    </Layout>
  ) 
}