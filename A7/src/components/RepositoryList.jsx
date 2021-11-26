import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem"

const repositoryName = "Atividade 1"

const repository = {
    name: "Atividade",
    description: "Descrição da atividade",
    link: "#"
}

export function RepositoryList(){
    return(
        <section>
            <h1>Ula-lá</h1>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
        </section>
    )
}