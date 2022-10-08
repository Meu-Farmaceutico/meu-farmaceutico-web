import '../styles/Produto.css';
import '../styles/historico-vazio.css';
import HistoricoVazio from '../components/HistoricoVazio.jsx';
import Tratamento from '../components/Tratamento.jsx'
import Header from '../components/Header.jsx'

function Produto() {

const produtos = [{key: 1, nome: "Rivotril", dose: "20mg"}, 
{key: 2, nome: "Tandrilax", dose: "50mg"}, 
{key: 3, nome: "Diazepan", dose: "89mg"}
]

  return (
    <main className="main">
        <HistoricoVazio />
    </main>
  )
}
export default Produto;
