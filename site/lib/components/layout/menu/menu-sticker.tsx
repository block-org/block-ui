import React, { useEffect, useMemo } from 'react'
import { Tabs, Typography } from '@arco-design/web-react';
import Router from 'next/router'
import Metadatas from '../../../data'
import useLocale from '../../../use-locale'

const TabPane = Tabs.TabPane;

const MenuSticker = () => {
  const { locale } = useLocale()

  const tabbarData = useMemo(() => Metadatas[locale], [locale])

  const handleChange = (key: string) => {
    const defaultPath = `/en-us/${key}`
    Router.push(defaultPath)
  }

  return (
    <>
      <nav>
        <div className="sticker">
          <div className='inner'>
            <Tabs defaultActiveTab='1' onChange={handleChange} className='inner-tabs'>
              <TabPane key='' title='home' />
              {
                tabbarData
                  ? tabbarData.map((tab: any, index: any) => (
                    <TabPane
                      title={tab.localeName || tab.name}
                      key={tab.localeName || tab.name}
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
          height: 50px;
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
          bottom: 7px;
          background-color: #eaeaea;
        }

        .inner {
          box-sizing: border-box;
          width: 750pt;
          height: 100%;
          z-index: 900;
          margin: 0 auto;
        }

        :global(.inner-tabs .arco-tabs-header-nav:before){
          height: 0;
        }

        :global(.inner-tabs .arco-tabs-header-title){
          font-size: 1rem;
          text-transform: capitalize;
        }
        
      `}</style>
    </>
  )
}

export default MenuSticker
