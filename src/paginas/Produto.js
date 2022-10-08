import '../styles/Produto.css';
import Tratamento from '../components/Tratamento.jsx'
import Header from '../components/Header.jsx'


function Produto(props) {

const produtos = [{key: 1, nome: "Rivotril", dose: "20mg"}, 
{key: 2, nome: "Tandrilax", dose: "50mg"}, 
{key: 3, nome: "Diazepan", dose: "89mg"}
]

  return (
    <main className="main">
    <Header />
    {
      produtos.map((props) => {
          return (
              <Tratamento firebaseConfig={props.firebaseConfig} nome={props.nome} dose={props.dose} key={props.key}/>
          ) 
      })

    }
    </main>
  )
}
export default Produto;
