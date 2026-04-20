import { Link } from "react-router"; //importar el componente Link para la navegacion entre paginas
 
function Nav() {
    return (
        <nav className="flex items-center justify-between border-b border-slate-200 px-4 py--3 bg-gradiente-to-r from-blue-500 to-blue-900 text-while">
        <h2 className="m-0 text-lg fontsemibold text-while">React Fetching</h2>
        <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="hover:underline">
            Home
            </Link>
            <Link to="/Dragon" className="hover:underline">
                Dragonball
            </Link>
 
        </div>
    </nav>  
    );
}
 
export default Nav; //exportar el componente para su uso en otras partes de la aplicacion
 