const UserContext = React.createContext(null);
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

function Banner(props) {
	return (
		<div className="banner">
			<img className="banner-image" src={props.image} alt="banner image" />
			<h1 className="banner-text">{props.text}</h1>
		</div>
	);
}
