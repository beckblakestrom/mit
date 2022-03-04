const UserContext = React.createContext(null);
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
function Spa() {
	return (
		<HashRouter>
			<div>
				<Nav />
				<UserContext.Provider value={{ users: ["peter"] }}>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/about/" element={<About />} />
						<Route path="/products/" exact element={<Products />} />
					</Routes>
				</UserContext.Provider>
			</div>
		</HashRouter>
	);
}

ReactDOM.render(<Spa />, document.getElementById("root"));
