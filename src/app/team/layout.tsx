import Link from 'next/link'
import React from 'react'

export default function layout({children} : {children: React.ReactNode}) {
  return ( 
    <>
        <h1>layout from TeamAbout</h1>
        {children}
    </>
  )
}
