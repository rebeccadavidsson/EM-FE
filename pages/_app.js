import "../styles/index.css"
import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import { ThemeProvider } from 'next-themes'
import { PageTransition } from 'next-page-transitions';
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp = ({Component, pageProps}) => {

    return (
        <>
            <ThemeProvider themes={['dark', 'light']} defaultTheme={'dark'}>
                <ParallaxProvider>
                    <Layout>
                        <Head>
                            <title>Emely Davidsson</title>
                            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                            <link href="https://fonts.googleapis.com/css2?family=Questrial&family=Roboto+Mono:wght@100&display=swap&family=Roboto:wght@100&display=swap" rel="stylesheet" />
                        </Head>

                        <PageTransition timeout={300} classNames="page-transition">
                            <Component {...pageProps} />
                        </PageTransition>

                    </Layout>
                </ParallaxProvider>
            </ThemeProvider>
        </>
    )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(ctx)

    // Pass the data to our page via props
    return {...appProps, pageProps: {path: ctx?.router?.route}}
}

export default MyApp
