const CheckBox = ({ id, name, onChange }) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={id}
      className="mr-1"
      onChange={onChange}
    />
    <label htmlFor={id} className="mr-4">
      {name}
    </label>
  </>
);

const Input = ({ name, placeholder, ...restProps }) => (
  <>
    <label htmlFor={name}>{placeholder}</label>
    <input
      name={name}
      id={name}
      className="mb-3 p-2 border border-indigo-800 rounded"
      {...restProps}
    />
  </>
);

export { Input, CheckBox };
