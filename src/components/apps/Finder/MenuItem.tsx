import { useMemo } from 'react'

import useFinderStore from '@/stores/finder-store'

import { finderIcons, FinderMenu } from '@/constants/icons'
import { username } from '@/constants/system'
import { cn } from '@/utils/styles'

interface MenuItemProps {
  menu: string
}

const MenuItem = ({ menu }: MenuItemProps) => {
  const { focusedDirectory, setFocusedDirectory } = useFinderStore()
  const menuAsKey = menu.toUpperCase() as keyof typeof FinderMenu
  const menuLabel =
    FinderMenu[menuAsKey] === FinderMenu.USER ? username : FinderMenu[menuAsKey]
  const handleClick = () => setFocusedDirectory(FinderMenu[menuAsKey])

  const heighlightMenuItem = useMemo(() => {
    return (
      focusedDirectory === (FinderMenu[menuAsKey] as string) ||
      (menuLabel === username && focusedDirectory === username)
    )
  }, [focusedDirectory, menuLabel, menuAsKey])

  return (
    <div
      key={menu}
      className={cn(
        'flex items-center gap-0.5 rounded-md px-1',
        heighlightMenuItem && 'bg-white/10',
      )}
      onClick={handleClick}
    >
      <img
        src={finderIcons[FinderMenu[menuAsKey]]}
        className='h-[30px] w-[30px] shrink-0'
        alt={menu}
      />
      <span className='overflow-hidden text-ellipsis text-[13px]'>
        {menuLabel}
      </span>
    </div>
  )
}

export default MenuItem
