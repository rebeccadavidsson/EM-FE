import linkedIn from '../public/linkedin.svg';
import NextImage from "next/image";

const Footer = () => {

    return (
        <div className="pt-8 pb-8 flex justify-between">
            <p className="text-xs font-bold text-gray-400">
                Emely Davidsson - 2022
            </p>
            <a href={"https://www.linkedin.com/in/emely-davidsson-31815317a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACphVwQB2_vtKYsQ0xM1bL2tiD19w8ychg4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BCroVLCytSUqIZiAlN73L8Q%3D%3D"}>
               <NextImage
                   width={20}
                   height={20}
                   src={linkedIn} />
            </a>
        </div>
    )
}

export default Footer
