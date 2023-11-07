import Link from 'next/link'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Image from 'next/image'

const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))


const VerticalNavHeader = props => {
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <Image
            src="/images/logo.png"
            height={100}
            width={100}
            alt="Picture of the author"
            objectFit='contain'
          />
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
