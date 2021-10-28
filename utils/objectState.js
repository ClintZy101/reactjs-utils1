

const [state, setState] = useState({ fName: "", lName: "" });
const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
};

<div>
    <input
        value={state.fName}
        type="text"
        onChange={handleChange}
        name="fName"
    />
    <input
        value={state.lName}
        type="text"
        onChange={handleChange}
        name="lName"
    />

</div>





setState(prevState => ({
    ...prevState,
    fName: 'your updated value here'
}));