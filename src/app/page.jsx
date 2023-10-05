import { Hero, Services, About, Experience, Data, Testimonials, Signup, Projects } from './components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Experience />
      <Data />
      <Testimonials />
      <Projects />
      <Signup />
    </main>
  )
}
