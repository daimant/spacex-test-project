import Hero from '@/components/Hero/Hero'
import InteractiveBackground from '@/components/InteractiveBackground/InteractiveBackground'
import InfoPanels from '@/components/InfoPanels/InfoPanels'

export default function Home() {
  return (
    <main className="main">
      <InteractiveBackground />
      <div className="container">
        <Hero />
        <InfoPanels />
      </div>
    </main>
  )
}
