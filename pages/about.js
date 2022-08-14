import Header from "../components/Header";
import NextImage from "next/image";
import profile from "../public/profile.png";


const About = () => {

    return (
        <div>
            <Header/>

            <div className={'mt-8 md:flex w-full container md:p-20 pt-4 fade-in'}>
                <div className={'md:mr-8 mb-8 md:mb-0 md:w-1/3'}>
                    <NextImage
                        src={profile}/>
                </div>

                <div className={'pr-8 md:w-2/3'}>
                    <h1 className={'text-2xl'}>
                        Lorem ipsum
                    </h1>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About

