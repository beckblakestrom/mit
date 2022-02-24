const card = (
	<div className="card mb-3" style={{ maxWidth: "540px" }}>
		<div className="row g-0">
			<div className="col-md-4">
				<img
					src="/images/latest_big_pale.jpg"
					className="img-fluid rounded-start"
					alt="hello"
				/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		</div>
	</div>
);
const element = React.createElement("div", [], card);

ReactDOM.render(element, document.getElementById("root"));
