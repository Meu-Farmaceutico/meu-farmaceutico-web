import "../styles/HomeZero.css";
import arrowback from "../assets/imgs/arrow-left.svg";



const AgendarMedicamento = () => {



    return (
        <>
            <div className="wrapper">
                <h3 className="titleMain">Agendar Medicamento</h3>
                <a href="/AddMedicamento"><img src={arrowback} alt="voltar" className="back-icon" /></a>
            </div>

            <div>
                <h4 className='agendamentoTitle'>Agendamento</h4>
                <p className='agendamentoSubTitle'>Configure aqui o lembrete para este medicamento.</p>

                <h3 className='nameRemedy'>Captopril</h3>

                <div className="main">
                    <div className="mainSelect">
                        <label for="unidade">Unidade*</label>
                        <select name="unidade" id="unidade" className="select unidade" required>
                            <option className="option" value="comprimido">Comprimido</option>
                            <option className="option" value="gotas">Gotas</option>
                            <option className="option" value="injeção">Injeção</option>
                        </select>
                    </div>

                    <div className="mainSelect">
                        <label for="unidade">Frequência de Uso*</label>
                        <select name="unidade" id="unidade" className="select uso" required>
                            <option className="option" value="1">1 vez ao dia</option>
                            <option className="option" value="2">2 vezes ao dia</option>
                            <option className="option" value="3">3 vezes ao dia</option>
                        </select>
                    </div>
                    <input className="call-to-action" type="button" onClick="location.href='../'" value="Prosseguir" />
                        <a href="../">Campos de Dose</a>
                </div>
            </div>



        </>

    );
};

export default AgendarMedicamento;