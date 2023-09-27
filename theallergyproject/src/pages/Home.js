import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/restaraunts">Restaraunts</Link>
            </nav>
            <h1>Home</h1>
        </div>
    );
};
  
export default Home;