import '../styles/historico-vazio.css'

const HistoricoVazio = () => {
    return (
        <div className="historico-vazio">
            <h3 className="historico-vazio-heading bold">Ah não!</h3>
            <h4 className="historico-vazio__heading">Lista de Tratamentos vazia</h4>
            <p className="historico-vazio__para">Adicione um lembrete sobre medicamentos</p>
            <button className="historico-vazio__cta lembrete" >Adicionar Medicamentos</button>
            <button className="historico-vazio__cta oferta">Ir para ofertas</button>
        </div>
    )
}


export default HistoricoVazio;