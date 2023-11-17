import FileExplorer from './FinderExplorer/FileExplorer'
import Footer from './FinderExplorer/Footer'
import Toolbar from './FinderExplorer/Toolbar'

const FinderExplorer = () => {
  return (
    <section className='col-span-6 grid grid-rows-[82px_auto_50px] rounded-r-lg bg-finder-background'>
      <Toolbar />
      <FileExplorer />
      <Footer />
    </section>
  )
}

export default FinderExplorer
