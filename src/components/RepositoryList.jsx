import React from 'react'
import { RepositoryItem } from './RepositoryItem';
const  repository = {
    name : 'uniform',
    description : 'Forms in React',
    link: ' https://github.com/uniform/uniform'
}



const RepositoryList = () => {
    return(
        <section className="repository-list">
            <h1> Lista de Repositorios </h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}

export default RepositoryList;