import { Hero, Services, About, Experience, Data, Testimonials, Blog, Signup } from './components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Experience />
      <Data />
      <Testimonials />
      <Blog />
      <Signup />
    </main>
  )
}
