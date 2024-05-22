import React from 'react';

const Layout =({child}) =>{
    return(
        <>
        <html lang="es">
        <head>
        </head>
        <body>
          <div>
            <ToolBar/>
            <Sides/>
            <Backdrop/>
          </div>
          <main>{child}</main>
        </body>
        </html>
        </>
    )
}

export default Layout;
