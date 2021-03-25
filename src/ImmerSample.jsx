import React, { useRef, useCallback, useState } from "react";
import produce from 'immer';

const ImmerSample = () => {
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });
  const nextId = useRef(1);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        //parameter ( 수정하고 싶은 애, 어떻게 수정할 건지)
        produce (draft => {
          draft[name] = value;
        })
      );
    },[]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce ( draft => {
          draft.array.push(info);
        }) 
      );

      //초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },[]);

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
              {info.username} ( {info.name} )
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImmerSample;
