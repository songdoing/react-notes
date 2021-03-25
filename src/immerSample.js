import React, { useRef, useCallback, useState } from "react";

const immerSample = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((e) => {});

  const onSubmit = useCallback((e) => {});

  const onRemove = useCallback((id) => {});
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default immerSample;
