import FileExplorer from './FinderExplorer/FileExplorer'
import Footer from './FinderExplorer/Footer'
import Toolbar from './FinderExplorer/Toolbar'

const FinderExplorer = () => {
  return (
    <section className='col-span-6 grid grid-rows-[55px_auto_22.5px] rounded-r-lg bg-[#1F1F20]'>
      <Toolbar />
      <FileExplorer />
      <Footer />
    </section>
  )
}

export default FinderExplorer
