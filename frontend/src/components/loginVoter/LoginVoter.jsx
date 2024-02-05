function LoginVoter({ label, type, name, value, onChange, placeholder }) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

export default LoginVoter;
