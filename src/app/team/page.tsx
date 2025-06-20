import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description: "This is the about page of the app"
}

export default function page() {
  return (
    <h1>team page</h1>
  )
}
