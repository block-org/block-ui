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
      <nav>
        <div className="sticker">
          <div className='inner'>
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
          </div>
        </div>
      </nav >
      <style jsx>{`
        nav {
          position: relative;
          width: 100%;
          height: 48px;
          background-color: #fff;
        }

        nav.fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background-color: #fff;
          box-shadow: rgba(0, 0, 0, 0.1) 0 0 15px 0;
        }

        .sticker {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .sticker:before {
          position: absolute;
          content: '';
          height: 1px;
          left: 0;
          right: 0;
          bottom: 8px;
          background-color: #eaeaea;
        }

        .inner {
          box-sizing: border-box;
          width: 750pt;
          height: 100%;
          z-index: 900;
          margin: 0 auto;
        }

      `}</style>
    </>
  )
}

export default MenuSticker
