import '../App.css';
import Navigation from "../../Components/Navigation";
import PostList from '../../Components/PostList';

const Home = () => {
    return (
        <div className='bg-secondary'>
            <Navigation />
            <div className="container mt-5 vh-100">
                <div className="row">
                    <div className="col-8">
                        <PostList />
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>

    );
}
 
export default Home;