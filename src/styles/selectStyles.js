const defaultSelectStyles = {
        control: (base) => ({
        ...base,
        backgroundColor: "white",
        color: "black",
        marginBottom: "12px",
        }),
        singleValue: (base) => ({
        ...base,
        color: "black",
        }),
        input: (base) => ({
        ...base,
        color: "black",
        }),
        option: (base, state) => ({
        ...base,
        color: "black",
        backgroundColor: state.isFocused ? "#eee" : "white",
        }),
        menu: (base) => ({
        ...base,
        backgroundColor: "white",
        }),
};

export default defaultSelectStyles;