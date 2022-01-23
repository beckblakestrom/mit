function useForm(initalValues) {
	const [values, setValues] = React.useState(initalValues);

	return [
		values,
		(e) => {
			if (e.type === "change") {
				setValues({
					...values,
					[e.target.name]: e.target.value,
				});
			}
		},
	];
}
