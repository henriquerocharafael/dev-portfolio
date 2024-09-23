import { Bio } from './sections/Bio'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './components/Contact'
import { Footer } from './sections/Footer'

export function App() {
  return (
    <>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
        <div>
          <Bio />
          <Skills />
        </div>
        <div className="col-span-2">
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}
