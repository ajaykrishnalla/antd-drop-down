import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Dropdown, Button,Icon } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div>
    
    <Dropdown trigger={['click']} overlay={menu} placement="bottomCenter">
    <MoreOutlined />
    </Dropdown>
  </div>,
  document.getElementById('container'),
);