import './stylesmenu.css'


function Menu(){
    return(
        <div class="text-center menubar text-dark py-2">
            <a href="/"> 

            </a>

             <a href="/"> <img class="logo"
              src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg"></img> </a>

        <br></br>
            <a class="menutext" href="/cadastro">Cadastro</a>&nbsp;&nbsp;&nbsp;
            <a class="menutext" href="/login">Login</a>&nbsp;&nbsp;&nbsp;

            
        </div>
    )
}
export default Menu;