import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import PageHeader from './header'

export interface Meta {
  title: string
}

export interface Props {
  meta: Meta
  getStaticProps?: any
}
const defaultLayout = {
  gap: '16pt',
  pageWidthWithMargin: '782pt',
}

export const Layout: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({ children, meta }) => {
    const [showAfterRender, setShowAfterRender] = useState<boolean>(false)

    useEffect(() => setShowAfterRender(true), [])

    if (!showAfterRender) {
      return (
        <section>
          <PageHeader meta={meta} />
          {children}
          <style jsx>{`
            section {
              display: none;
              opacity: 0;
            }
          `}</style>
        </section>
      )
    }

    return (
      <div className="layout">
        <PageHeader meta={meta} />
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="side-shadow" />
        <main className="main">
          <div>{children}</div>
        </main>
        <style jsx>{`
          .layout {
            min-height: calc(100vh - 80px);
            max-width: ${defaultLayout.pageWidthWithMargin};
            margin: 0 auto;
            padding: 0 ${defaultLayout.gap};
            padding-left: 28pt;
            display: flex;
            box-sizing: border-box;
          }
          .sidebar {
            width: 200px;
            margin-right: 20px;
            -webkit-overflow-scrolling: touch;
            -webkit-flex-shrink: 0;
            height: calc(100% - 2rem - 140px + ${false ? '60px' : 0});
            position: fixed;
            top: 120px;
            bottom: 2rem;
            transform: translateY(${false ? '-60px' : 0});
            transition: transform 200ms ease-out;
            z-index: 100;
          }
          .side-shadow {
            width: 220px;
            flex-shrink: 0;
            height: 80vh;
          }
          .main {
            display: flex;
            max-width: calc(100% - 220px);
            flex-direction: column;
            padding-left: 20px;
            padding-top: 25px;
            flex: 0 0 100%;
            padding-bottom: 150px;
          }
       
        `}</style>
      </div>
    )
  },
)

export default Layout
