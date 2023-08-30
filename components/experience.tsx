import { PortableText } from "@portabletext/react";

const ExperienceComponent = ({data}) => {
    return (
        <section className="Experience">
        <div className="container-4">
            <div className="skills1">
                <div>{data.sectionName}</div>
            </div>
            <div className="F1">{data.description}</div>
            {data.experiences.map(experience=>{
                return (
                    <div className="G1">
                    <div className="upwork">{experience.companyName}</div>
                    <div className="G2">
                        <div className="Sr">{experience.post}</div>
                        <PortableText value={experience.descriptionOfPost} />
                    </div>
                    <div className="G3">{experience.date }</div>
                </div>
                )
            })}
          
            
        </div>
      </section>
    )
}

export default ExperienceComponent;