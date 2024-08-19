import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Profile/MyPosts/Post/Post";
import Profile from "./components/Profile/Profile";



const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
}

export default App;
