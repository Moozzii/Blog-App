import React from 'react'
import {Logo, Logout, Container} from "../components"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      path: '/',
      active: true
    },
    {
      name: "Login",
      path: '/login',
      active: !authStatus
    },
    {
      name: "Signup",
      path: '/signup',
      active: !authStatus
    },
    {
      name: "All Posts",
      path: '/all-posts',
      active: authStatus
    },
    {
      name: "add Post",
      path: '/add-post',
      active: authStatus
    },
   
  ]

  return (
   <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto '> {navItems.map((item) => 
          item.active ? (
            <li key={item.name} onClick={() => navigate(item.path)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
              
            </li>
          ): null

          )}
          {authStatus && (
            <li>
              <Logout />
            </li>
          )}
          </ul>
        </nav>
      </Container>
   </header>
  )
}

export default Header
