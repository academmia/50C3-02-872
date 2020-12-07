import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../state/context/auth-context";
import AuthEnable, { AuthDisable } from "../state/context/AuthEnable";

const Nav = props => {

    const history = useHistory();
    const { setAuth } = useContext(AuthContext);

    const logoutHandler = ev => {
        setAuth({});
        history.push("/");
    }

    return (
        <nav>
            <Link to="/" className="brand"><i className="fas fa-book"></i> <span>LIBB</span>  </Link>
            <div className="menu">

                <AuthDisable>
                    <Link to="/login"
                        className="button icon-file-code">Login</Link>
                </AuthDisable>

                <AuthEnable>
                    <button className="pseudo button icon-help-circled"><i className="fas fa-book-reader" /> 0 </button>
                    <button onClick={logoutHandler}
                        className="button icon-file-code">Logout</button>
                </AuthEnable>
                
            </div>
        </nav>
    )
}

export default Nav;
