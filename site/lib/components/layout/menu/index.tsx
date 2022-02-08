import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MenuSticker from './menu-sticker'

const Menu: React.FC<unknown> = () => {
  const router = useRouter()
  const [showAfterRender, setShowAfterRender] = useState<boolean>(false)

  let isChinese = false;

  useEffect(() => setShowAfterRender(true), [])

  useEffect(() => {
    const prefetch = async () => {
      const urls = isChinese
        ? ['/zh-cn/guide/introduction', '/zh-cn/components/text', '/zh-cn/customization']
        : ['/en-us/guide/introduction', '/en-us/components/text', '/en-us/customization']

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
      <MenuSticker />
    </div>
  )
}

export default Menu
