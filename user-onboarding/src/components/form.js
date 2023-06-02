import React from 'react';

const Form = (props) => {
    const { change, submit, errors } = props
    const { name, email, password, tos } = props.values

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target
        const newVal = type === 'checkbox' ? checked : value
        change(name, newVal)

    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    return (
        <div>
            <p>{errors.name}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <h1>My Form</h1>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    />
                </label>
                <label>TOS:
                    <input
                    type="checkbox"
                    name="tos"
                    checked={tos}
                    onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create a friend!"/>
            </form>
        </div>
    )
}
export default Form
