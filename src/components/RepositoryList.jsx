import React from 'react'
import { RepositoryItem } from './RepositoryItem';
const RepositoryList = () => {
    return(
        <section className="repository-list">
            <h1> Lista de Repositorios </h1>
            <ul>
                <RepositoryItem/>
                <RepositoryItem/>
                <RepositoryItem/>
                <RepositoryItem/>
            </ul>
        </section>
    )
}

export default RepositoryList;