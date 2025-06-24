import React from "react";

export default function Layout({children} : {children: React.ReactNode}) {
    return <>
      <h1>Individual Todo</h1>
      {children}
    </>
}