import { PortableText } from "@portabletext/react";
import sanityClient from "../pages/sanity-client";
import Image from "next/image";
import Link from "next/link";
const HeroComponent = ({data}) => {
    return (
        <section className="Hero">
        <div className="container">
            <div className="content">
                <div className="C1">Hi, I’m {data.name}</div>
                <div className="C2">{data.longDescription}</div>
                <div className="C34">
                    <div className="C3">
                        <div><Image src={data.locationImage} alt={data.locationImageAlt} width={25} height={25}/></div>
                        <div className="A1">{data.location}</div>
                    </div>
                    {/* <div className="C4">
                        <div><Image src="../Portfoliodev/Image/Icon4.png" alt=""  width={400} height={400}/></div> */}
                        {/* <div className="A2">{data.currentStatus}</div> */}
                    {/* </div> */} 
                </div>
                <div className="logo567">
                    {data.socialLinks.map(socialLink=>{
                        return(
                            <Link href={socialLink.imageUrl}>
                                <div><Image src={socialLink.image} alt={socialLink.imageAltText}  width={25} height={25} /></div>
                                </Link>
                        )
                    })}
                </div>
            </div>
            <div><Image className="pic_image" src={data.profileImage} alt={data.profileImageAlt}  width={300} height={400}/></div>
        </div>
      </section>
    )
}

export default HeroComponent;


