const Tratamento = (props) => {

    // function handleEditing() {
        
    // }

    return (
        <div className="produto" key={props.key}>
            <div className="produto__rotulo">
                <h3 className='produto__nome'>{props.nome}</h3>
                <p>{props.dose}</p>
            </div>
            <div className="action">
                <button className='produto__action edit'>Editar</button>
                <button className='produto__action delete'>Deletar</button>
            </div>
        </div>
    )
}


export default Tratamento;