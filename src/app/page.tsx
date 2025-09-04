import AboutMe from '@/globals/view/AboutMe'
import MyProjects from '@/globals/view/MyProjects'
import ProfileCard from '@/globals/view/ProfileCard'
import Timeline from '@/globals/view/Timeline'

export default function Home() {
  return (
    <>
      <div className="mt-16" />
      <ProfileCard />
      <Timeline />
      <div className="mt-2" />
      <AboutMe />
      <div className="mt-2" />
      <MyProjects />
    </>
  )
}
