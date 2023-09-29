
import "@styles/globals.css"

import { CartProvider } from "@context/CartContext";


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <CartProvider>
                <main className='app'>
                    {children}
                </main>
            </CartProvider>
        </body>
    </html>
  )
}

export default RootLayout