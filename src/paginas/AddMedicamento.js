import "../styles/AddMedicamento.css";
import Lupa from "../assets/imgs/search.svg";
import Arrow from "../assets/imgs/arrow-left.svg";
import MicBarraCodigo from "../assets/imgs/mic-cBarras.svg";



const AddMedicamento = () => {
    return (
        <>
            <div className="header">
                <a href="/HomeZero"><img className="arrow" src={Arrow} alt="" /></a>

                    <div className="container">
                        <input className="PesquisaMedicamento" type="text" placeholder="Pesquisar medicamento" />
                            <button className="Lupa" ><img src={Lupa} alt="" /></button>
                    </div>
            </div>

            <div>
                <div className="options">
                    <img src={MicBarraCodigo} alt="" />
                </div>

                <div className="list">
                    <ul className="list-group list-group-flush">
                        <li className="sugestoes list-group-item bg-light">Sugestões</li>
                        <li className="list-group-item bg-light"><a href="/AgendarMedicamento">Captopril 25mg com 30 comprimidos 30 Gn-Germed</a></li>
                        <li className="list-group-item bg-light"><a href="/AgendarMedicamento">Captopril 25mg com 30 comprimidos 30 Gn-Germed</a></li>
                        <li className="list-group-item bg-light"><a href="/AgendarMedicamento">Captopril 25mg com 30 comprimidos 30 Gn-Germed</a></li>
                        <li className="list-group-item bg-light"><a href="/AgendarMedicamento">Captopril 25mg com 30 comprimidos 30 Gn-Germed</a></li>
                        <li className="list-group-item bg-light"><a href="/AgendarMedicamento">Captopril 25mg com 30 comprimidos 30 Gn-Germed</a></li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default AddMedicamento;


