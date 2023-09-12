import { Hero, Services, About, Experience } from './components'

export default function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-screen-xl py-16 lg:py-24 px-10">
      <Hero />
      <Services />
      <About />
      <Experience />
    </main>
  )
}
