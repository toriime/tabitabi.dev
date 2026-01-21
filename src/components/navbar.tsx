import { getCachedGlobal } from '@/lib/utils'
import { Nav } from '@/payload-types'
import React from 'react'
import NavbarClient from './navbar-client'

export default async function Navbar() {
    const navbarContent = await getCachedGlobal('nav', 2)() as Nav;
  return <NavbarClient links={navbarContent?.items || []} />;
}
