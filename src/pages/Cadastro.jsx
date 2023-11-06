import Menu from "./Menu";
import './stylesmenu.css'


function Contato(){
    return(
        <div>
            <Menu></Menu>
            <h1>Cadastro de Produtos</h1>
            <form>
                <input type="text" placeholder="Descrição"></input>
                <br></br>
                <input type="text" placeholder="Marca"></input>
                <br></br>
                <input type="date" placeholder="Data de Fabricação"></input>
                <br></br>
                <input type="number" placeholder="Qtd"></input>
                <br></br>
                <button>Confirmar</button>
            </form>
        </div>
    )
}
export default Contato;