'use client'
import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu, Drawer } from 'antd';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import useWindowDimensions from '@/utils/useWindowDimensions';


const Navbar: React.FC = () => {

  type MenuItem = Required<MenuProps>['items'][number];

  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false);
  const [selectedMenuKeys, setSelectedMenuKeys] = useState<string[]>([]);
  const { screenWidth, screenHeight } = useWindowDimensions()

  function getSelectedMenuKey() {
    let path = ["0"]

    switch (pathname) {
      case "/dashboard/links":
        path = ['1']
        break;

      case "/dashboard/cuenta":
        path = ['2']
        break;

      default:
        break;
    }
    return path
  }

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }


  const DashboardNavigationLinks: Array<String> = [
    '/dashboard',
    '/dashboard/links',
    '/dashboard/cuenta',
  ]

  if (screenWidth! < 500) {
    return (

      <div className='absolute'>
        <Drawer
          bodyStyle={{border: "none"}}
          width={"70%"}
          placement='left'
          open={open}
          onClose={onClose}
          closeIcon={<CloseOutlined style={{ color: "#000000", fontSize: "1.5rem" }} />}
        >
          <div className='h-full flex flex-col justify-between'>
          </div>
        </Drawer>
      </div >
    )
  } else {
    return (

      <div className='w-64 py-7 bg-primary flex flex-col justify-between'>
      </div>
    )

  }
};

export default Navbar;