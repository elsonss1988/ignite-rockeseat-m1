import React,{useEffect, useState}  from 'react'
import { RepositoryItem } from './RepositoryItem';
import '../style/repository.scss';

const  repository = {
    name : 'uniform',
    description : 'Forms in React',
    link: ' https://github.com/uniform/uniform'
}


const RepositoryList = () => {
    const [repositories,setRepositories]= useState([])
    
    useEffect(()=>{
        fetch('https://api.github.com/users/elsonss1988/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1> Lista de Repositorios </h1>
            <ul>
                {repositories.map( repository =>
                    <RepositoryItem key={repository.name} repository={repository}/>)}
            </ul>
        </section>
    )
}

export default RepositoryList;