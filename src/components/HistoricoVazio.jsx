const HistoricoVazio = () => {
    return (
        <div className="historico-vazio">
            <h3 className="historico-vazio__heading--bold">Ah não!</h3>
            <h4 className="historico-vazio__heading">Lista de Tratamentos vazia</h4>
            <p className="historico-vazio__para">Adicione um lembrete sobre medicamentos, medições ou realiza a sua primeira compra</p>
            <button className="historico-vazio__action lembrete" >Adicionar Medicamentos</button>
            <button className="historico-vazio__action oferta">Ir para ofertas</button>
        </div>
    )
}


export default HistoricoVazio;