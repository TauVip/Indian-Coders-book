import { LibraryBooksOutlined } from '@mui/icons-material'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [value, setValue] = useState(false)

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#232F3D' }} position='sticky'>
        <Toolbar>
          <Typography>
            <LibraryBooksOutlined />
          </Typography>
          <Tabs
            sx={{ ml: 'auto' }}
            textColor='inherit'
            indicatorColor='secondary'
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to='/add' label='Add product' />
            <Tab LinkComponent={NavLink} to='/books' label='Books' />
            <Tab LinkComponent={NavLink} to='/about' label='About Us' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
