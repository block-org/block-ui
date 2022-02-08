import React, { useEffect, useMemo } from 'react'
import { Tabs, Typography } from '@arco-design/web-react';
import Router from 'next/router'

const TabPane = Tabs.TabPane;

const tabbarData = [
  {
    "name": "guide",
    "route": "guide",
    "children": []
  },
  {
    "name": "components",
    "route": "components",
    "children": []
  },
  {
    "name": "customization",
    "route": "guide/themes",
    "children": []
  }
]

const MenuSticker = () => {

  const handleChange = (key: string) => {
    const defaultPath = `/en-us/${key}`
    Router.push(defaultPath)
  }


  return (
    <>
      <Tabs defaultActiveTab='1' onChange={handleChange}>
        <TabPane key='' title='Home' />
        {
          tabbarData
            ? tabbarData.map((tab: any, index: any) => (
              <TabPane
                title={tab.name}
                key={tab.route}
              />
            ))
            : null
        }
      </Tabs>
    </>
  )
}

export default MenuSticker
