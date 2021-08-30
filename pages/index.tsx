import type { NextPage } from 'next'
import { connect } from 'react-redux'
import ResultList from 'components/list'

const Home: NextPage = (state) => {

  return (
    <>
      <ResultList />
    </>
  )
}

export default connect((state) => state)(Home)
