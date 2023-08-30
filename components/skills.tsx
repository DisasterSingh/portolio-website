import Image from "next/image";

interface Skill {
    skillImage: string;
    skillImageAlt: string;
    skillDescription: string;
  }

const SkillsComponent = ({data}: {data: any}) => {
    return (
        <section className="skills">
  <div className="container3">
      <div className="skills1">
          <div>{data.sectionName}</div>
      </div>
      <div className="F1">{data.sectionDescription}</div>
      <div className="F2">
        {data.skillTypes.map((skill:Skill, index: number)=>{
                return (
                <div key={index}>
                    <div><Image src={skill.skillImage} alt={skill.skillImageAlt}  width={65} height={65} /></div>
                    <div>{skill.skillDescription}</div>
                </div>
                )
        })}
      </div>
  </div>
</section>
    )
}

export default SkillsComponent;