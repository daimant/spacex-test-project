import Hero from '@/components/Hero/Hero'
import InteractiveBackground from '@/components/InteractiveBackground/InteractiveBackground'
import SpaceAnimation from '@/components/SpaceAnimation/SpaceAnimation'
import InfoPanels from '@/components/InfoPanels/InfoPanels'

export default function Home() {
  return (
    <main className="main">
      <InteractiveBackground />
      <SpaceAnimation />
      <Hero />
      <InfoPanels />
    </main>
  )
}
