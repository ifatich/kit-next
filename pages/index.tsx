import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '../components/Button/Button'
// import '../styles/global.css'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <br></br>
    <Button variant='primary' label={'test button primary'} />
    <Button variant='secondary' label={'test button primary'} />
  </Layout>
)

export default IndexPage
