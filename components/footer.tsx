import Image from "next/image";
import Link from "next/link";


interface SocialLink {
    imageUrl: string;
    image: string;
    imageAltText: string;
  }

const FooterComponent = ({data}: {data: any}) => {
    return (
        <div>
        <section className="contactme">
        <div className="container-4">
            <div className="skills4">
                <div>{data.sectionName}</div>
            </div>
            <div className="F4">{data.description}</div>
            <div>
                <div className="L2">
                    <div><Image src={data.mailAddressLogo} alt=""  width={50} height={40}/></div>
                    <div>{data.mailAddress}</div>
                    <div><Image src={data.mobileNumberCopy} alt=""  width={40} height={40}/></div>
                </div>
                <div className="L2">
                <div><Image src={data.mobileNumberLogo} alt=""  width={40} height={40}/></div>
                    <div>+91-{data.mobileNumber}</div>
                    <div><Image src={data.mobileNumberCopy} alt=""  width={40} height={40}/></div>
                </div>
            </div>
            <div className="Findout">
                <div className="endf">
                    <div className="platforms">{data.endLine}</div>
                    <div className="socialmedia">
                   
                    {data.socialLinks.map((socialLink: SocialLink, index: number)=>{
                        return(
                            <div key={index}>
                            <Link href={socialLink.imageUrl}>
                                <div><Image src={socialLink.image} alt={socialLink.imageAltText}  width={25} height={25} /></div>
                                </Link>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
      </section>
      <footer className="footer">
        <div className="Z1">
          {/* <Image src="../Portfoliodev/Image/Icon@.png" alt=""  width={400} height={400}/> */}
          2023 | Designed and coded with ❤️️ by <span>Sahil
            Verma</span></div>
      </footer>
      </div>
    )
}

export default FooterComponent;