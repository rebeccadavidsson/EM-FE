import Footer from "./Footer";


const Layout = ({children}) => {

    return (
        <div className={`h-auto container flex flex-col h-screen justify-between`}>

            {children}
            <Footer />
        </div>
    )
}

export default Layout

