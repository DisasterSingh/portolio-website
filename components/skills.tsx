import Image from "next/image";

const SkillsComponent = ({data}) => {
    return (
        <section className="skills">
  <div className="container3">
      <div className="skills1">
          <div>{data.sectionName}</div>
      </div>
      <div className="F1">{data.sectionDescription}</div>
      <div className="F2">
        {data.skillTypes.map(skill=>{
                return (
                <div>
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