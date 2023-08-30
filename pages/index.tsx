import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import NavComponent from '../components/navbar'
import HeroComponent from '../components/hero'
import sanityClient from '../sanity-client'
import AboutComponent from '@/components/about'
import SkillsComponent from '@/components/skills'
import ExperienceComponent from '@/components/experience'
import FooterComponent from '@/components/footer'

const Index = ({res} : {res: any}) => {
    return (
      <>
          <HeroComponent data={res.headerSectionData} />
          <AboutComponent data = {res.aboutSectionData}/>
          <SkillsComponent data = {res.skillSectionData} />
          <ExperienceComponent data = {res.experienceSectionData} />
          <FooterComponent data ={res.contactMeSection }/>
      </>

    )
}


export default Index;

export async function getServerSideProps() {
  // Fetch data from external API
  const aboutSectionData = await sanityClient.fetch(`*[_type == 'about'][0]{
    ...,
    "profileImage" : profileImage.asset->url
  }`)
  const skillSectionData = await sanityClient.fetch(`*[_type == 'skills'][0]{
    ...,
    'skillTypes' : skillTypes[
      
    ]{
      skillImageAlt, 
      skillDescription,
      'skillImage':skillImage.asset->url
    }
  }`)

  const headerSectionData =await sanityClient.fetch (`*[_type == 'header'][0]{
    ...,
    'profileImage': profileImage.asset->url,
    'locationImage': locationImage.asset -> url,
     'nameImage':nameImage.asset -> url,
      'socialLinks': socialLinks[]{
      ...,
      'image':image.asset->url,
      imageAltText
      }
  }
      `)
    
  const contactMeSection  =await sanityClient.fetch (`*[_type=="contactMe"][0]{
    ...,
      "mobileNumberLogo": mobileNumberLogo.asset-> url,
        "mailAddressLogo": mailAddressLogo.asset-> url,
        "mailAddressCopyLogo": mailAddressCopyLogo.asset-> url,
         "mobileNumberCopy": mobileNumberCopy.asset-> url,
       'socialLinks': socialLinks[]{
          ...,
          'image':image.asset->url,
          imageAltText
          }
      
    }`)


  
  const experienceSectionData =await sanityClient.fetch (`*[_type == 'experience'][0]`)
  const res = {aboutSectionData, skillSectionData, headerSectionData, experienceSectionData,contactMeSection}
  return { props: { res } }
}