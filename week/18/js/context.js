const UserContext = React.createContext(null);
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

function Card(props) {
	function classes() {
		const background = props.bgcolor ? "bg-" + props.bgcolor : " ";
		const text = props.txtcolor ? "text-" + props.txtcolor : "text-white";
		return "card" + background + text;
	}
	return (
		<div className="card">
			<div className="card__header">{props.header}</div>
			<div className="card__body">
				<h5 className="card__title">{props.title}</h5>
				<h5 className="card__text">{props.text}</h5>
				{props.body}
				<div id="createStatus">{props.status}</div>
			</div>
		</div>
	);
}

function Banner(props) {
	return (
		<div className="banner">
			<img className="banner-image" src={props.image} alt="banner image" />
			<h1 className="banner-text">{props.text}</h1>
		</div>
	);
}
