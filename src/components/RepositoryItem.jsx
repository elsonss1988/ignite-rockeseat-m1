
import React from 'react';

export function RepositoryItem (props){

    return(
        <>
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>

            <p>{props.repository?.description}</p>
            <a href={props.repository?.html_url}>
                Acessar Repositório ...
            </a>
        </li>
    </>
    )
}