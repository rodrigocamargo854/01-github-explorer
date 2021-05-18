import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

//https://api.github.com/orgs/rocketseat/repos

interface Repository{
name:string
description:string
html_url:string

}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    //useEffect(() => { função }, [ quando acontecer ])
    //se o array de dependencias [quando acontecer] for passada vazia
    //ele ira executar uma unica vez. Nunca deixar sem o segundo parametro [];


    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);
    

    //propriedade key
    //utilizado para o react se localizar nos 
    //itens desenvolvimento
    //do map
    return (
        
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>

                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>

    );

}