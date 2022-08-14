import NextImage from "./Image";
import Link from "next/link";
import logo from "../public/logo_transparent.png";

const Header = () => {

    const logoMedia = {
        url: logo,
        alternativeText: 'logo'
    }

    const SubHeader = () => {
        return <div className={'p-4 pt-0 mmd:p-0 text-xs md:text-md mt-2 justify-end flex font-roboto-mono'}>
            <Link href={'/about'}><a className={'mr-3'}>ABOUT</a></Link>
            <span className={'mr-3'}>|</span>
            <a href={'https://www.instagram.com/theartofduplicity/'} target="_blank" rel={"noreferrer"}
               className={''}>INSTAGRAM</a>
        </div>
    }

    return (<>
        {/* Desktop */}
        <div className={'flex flex-wrap justify-between items-center mx-auto hidden md:block '}>
            <div className={'p-4 xl:pt-16 md:pb-4 flex items-center justify-between'}>
                <div className={'flex'}>
                    <Link href={'/'}>
                        <a>
                            <div className={'w-12 h-16'}>
                                <NextImage
                                    media={logoMedia}/>
                            </div>
                        </a>
                    </Link>
                    <Link href={'/'}>
                        <a>
                            <div className={'md:pl-8 font-roboto-mono'}>
                                <h1 className={'text-5xl'}>Emely Davidsson</h1>

                            </div>
                        </a>
                    </Link>
                </div>
                <SubHeader/>
            </div>

        </div>

        {/* Mobile */}
        <div className={'flex flex-wrap justify-between items-center mx-auto md:hidden block'}>
            <div className={'p-4 xl:pt-16  md:pb-8 flex items-center '}>
                <Link href={'/'}>
                    <a>
                        <h1 className={'md:pl-8 font-roboto-mono text-3xl'}>Emely Davidsson</h1>
                    </a>
                </Link>
                <div className={'w-12 h-12'}>
                    <NextImage
                        media={logoMedia}/>
                </div>
            </div>
            <SubHeader/>
        </div>

        <hr/>

    </>);
};

export default Header;