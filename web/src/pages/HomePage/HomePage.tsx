import { MetaTags } from '@redwoodjs/web'
import ItemsCell from 'src/components/ItemsCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      {/* insert items list */}
      <ItemsCell></ItemsCell>
    </>
  )
}

export default HomePage
