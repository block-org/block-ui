import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MenuLinks from './menu-links'
import MenuSticker from './menu-sticker'

const Menu: React.FC<unknown> = () => {
  const router = useRouter()
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false)

  let isChinese = false;

  useEffect(() => setShowAfterRender(true), [])

  useEffect(() => {
    const prefetch = async () => {
      const urls = isChinese
        ? ['/zh-cn/guide/introduction', '/zh-cn/components/button', '/zh-cn/guide/themes']
        : ['/en-us/guide/introduction', '/en-us/components/button', '/en-us/guide/themes']

      await Promise.all(
        urls.map(async url => {
          await router.prefetch(url)
        }),
      )
    }

    prefetch()
      .then()
      .catch(err => console.log(err))

  }, [isChinese])

  if (!showAfterRender) {
    return null
  }

  return (
    <div>
      <MenuLinks />
      <MenuSticker />
    </div>
  )
}

export default Menu
