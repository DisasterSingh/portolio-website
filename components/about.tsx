import Image from "next/image";
import {PortableText} from '@portabletext/react'


const AboutComponent = ({data}) => {
    return (
        <section className="About">
  <div className="AC">
      <div className="pic2"><Image className="pic2_image"src={data.profileImage} alt={data.profileImageAlt}  width={400} height={500}/></div>
      <div className="column">
          <div className="D1">{data.heading}</div>
          <PortableText value = {data.description}  /> 
      </div>
  </div>
</section>
    )
}

export default AboutComponent;