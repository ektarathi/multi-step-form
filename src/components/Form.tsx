import * as React from "react";
import { useForm } from "react-hook-form";
export interface FormProps {}

const Form: React.SFC<FormProps> = () => {
    const { register, handleSubmit, errors } = useForm();
    const [data, setData] = React.useState([]);
	const [inputList, setInputList] = React.useState([
		{ firstName: "", lastName: "" } as any,
	]);
	const [email, setEmail] = React.useState([{ email: "" } as any]);
	const [checked, setChecked] = React.useState(false);

	// handle click event of the Add button
	const handleAddClick = () => {
		setInputList([...inputList, { firstName: "", lastName: "" }]);
	};

	const handleChecked = () => {
		setChecked(!checked);
	};
	const onSubmit = (formData: any, e: any) => {
        e.preventDefault();
        console.log(formData);
        setData(formData);
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmit)}>
				{inputList.map((x, i) => {
					return (
						<div className="box">
							<label htmlFor="name" className="formLabel">
								First Name
							</label>
							<input
								type="text"
								name="First Name"
								id="first-name"
								className="formField"
								ref={register({
									required: {
										value: true,
										message: "First Name is required",
									},
									minLength: {
										value: 3,
										message: "First Name should be minimum length of 3",
									},
								})}
							/>
							<label htmlFor="name" className="formLabel">
								Last Name
							</label>
							<input
								type="text"
								name="Last Name"
								id="last-name"
								className="formField"
								ref={register({
									required: {
										value: true,
										message: "Last Name is required",
									},
									minLength: {
										value: 5,
										message: "Last Name should be minimum length of 5",
									},
								})}
							/>
						</div>
					);
				})}
				<label className="checkbox">
					<input
						name="addressDetails"
						type="checkbox"
						onChange={handleChecked}
					/>
					<span className="checkmark"></span>
					Add address details
				</label>
				{checked
					? <div>
                            <label htmlFor="email" className="formLabel">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="formField"
                                ref={register({
                                    required: true,
                                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            />
                        </div>
					: ""}
                <div className="btn-box">
                    <button>Submit Data</button>
                </div>
			</form>

			<div style={{ marginTop: 20 }}>
				{JSON.stringify(data)}
			</div>
		</React.Fragment>
	);
};

export default Form;
