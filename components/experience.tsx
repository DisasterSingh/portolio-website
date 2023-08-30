import { PortableText } from "@portabletext/react";

interface Experience {
    companyName: string;
    post: string;
    descriptionOfPost: any; // Change the type if necessary
    date: string; // Change the type if necessary
    // Add more properties and their types if needed
}
const ExperienceComponent =({data}: {data: any}) => {
    return (
        <section className="Experience">
        <div className="container-4">
            <div className="skills1">
                <div>{data.sectionName}</div>
            </div>
            <div className="F1">{data.description}</div>
            {data.experiences.map((experience :Experience, index: number)=>{
                return (
                    <div className="G1" key= {index}>
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