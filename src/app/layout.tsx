import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Number1ByCarla: Premium Moisturizers, Body Oils, and Tanning Oils',
    description: `Experience the sheer joy of moisturizing with Number1ByCarla. Our Lebanese brand offers premium moisturizers, body oils, and tanning oils for a luxurious skincare routine.`,
    icons: {
        icon: `https://ucarecdn.com/a7178404-5bcd-4840-9567-57da934a8100/WhiteAndBlackModernAbstractBeautyLogo.png`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link href="https://db.onlinewebfonts.com/c/97386c1d7bdb684478ab36ec4e1129c8?family=Sk-Modernist" rel="stylesheet"/>
            {/* <link href="https://fonts.cdnfonts.com/css/sk-synonym-grotesk-trial" rel="stylesheet"/> */}
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
