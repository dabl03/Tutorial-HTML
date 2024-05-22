import React from 'react';

const Layout =({child}) =>{
    return(
        <>
        <html lang="es">
        <head>
        </head>
        <body>
          <div>
          </div>
          <main>{child}</main>
        </body>
        </html>
        </>
    )
}

export default Layout;
