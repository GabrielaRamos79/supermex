import NavBar from "../components/navbar/NavBar";
import Home from "../components/home/Home";
// aqui teneis que importar componente Home
function HomePage(){
    return (
        <>
        <NavBar/>
        <p>Hola soy pagina Home</p>
      <Home/>
        </>
    )
}

export default HomePage;