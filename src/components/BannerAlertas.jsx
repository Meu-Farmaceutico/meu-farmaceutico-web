import './banner-alertas.css';

const BannerAlertas = () => {
    return(
        <article class ="alertas-criticos-banner" >
             <div class ="alertas-criticos-info">
                <h4>Alertas Críticos</h4>
                <p>Sempre reproduzem som e aparecem na tela de bloqueio mesmo que seu dispsositivo esteja mudo ou em modo Não perturbe. 
                    Você pode gerenciar alertas críticos nas considerações do dispositivo.</p>
             </div>
             <div class="alertas-criticos-action">
                <p class="alertas-criticos-call">Ativar alertas críticos</p>
                <button>[Toggle]</button> 
             </div>
        </article>
    )
}

export default BannerAlertas;