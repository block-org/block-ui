import React, { useMemo, useRef } from 'react'
import SideItem, { Sides } from './side-item'
import useLocale from '../../../use-locale'
import Metadatas from '../../../data'

export interface Props { }

export type SideChildren = Sides | Array<Sides>

export const SideGroup: React.FC<{ sides?: SideChildren }> = React.memo(({ sides }) => {
  if (!sides) {
    return null
  }
  sides = Array.isArray(sides) ? sides : [sides]
  return (
    <SideItem sides={sides}>
      <SideGroup />
    </SideItem>
  )
})

export const Sidebar: React.FC<Props> = React.memo(() => {
  const boxRef = useRef<HTMLDivElement>(null)
  const { locale, tabbar } = useLocale()

  const tabbarData = useMemo(() => {
    const allSides = Metadatas[locale]
    const currentSide = allSides.find(side => side.name === tabbar)
    return (currentSide?.children || []) as Array<Sides>
  }, [locale, tabbar])

  return (
    <div ref={boxRef} className="sides box">
      <SideItem sides={tabbarData}>
        <SideGroup />
      </SideItem>
      <style jsx>{`
        .sides {
          width: 100%;
          padding-bottom: 16pt;
        }

        .box {
          overflow-y: auto;
          overflow-x: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .box::-webkit-scrollbar {
          width: 0;
          background-color: transparent;
        }
      `}</style>
    </div>
  )
})

export default Sidebar
