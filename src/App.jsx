import React from 'react'
import RepositoryList from './components/RepositoryList'
import Counter from './components/Counter';
// throw new Error('fail connection')

const App = () => {
    return(
        <>
            <p>Hello World</p>
            <RepositoryList/>
            <Counter/>
        </>
    )
    
}

export default App;