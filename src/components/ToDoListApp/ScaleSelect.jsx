import { useState } from "react";

const ScaleSelect = ({ select }) => {
  const [selected, setSelected] = useState(4);
  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <div id="scale-select">
      <div className="scale-select container">
        <ul className="scale-wrapper">
          <li>
            <input
              type="radio"
              id="num1"
              name="scale"
              value="1"
              onChange={handleChange}
              checked={selected === 1}
            />
            <label htmlFor="num1">1</label>
          </li>
          <li>
            <input
              type="radio"
              id="num2"
              name="scale"
              value="2"
              onChange={handleChange}
              checked={selected === 2}
            />
            <label htmlFor="num2">2</label>
          </li>
          <li>
            <input
              type="radio"
              id="num3"
              name="scale"
              value="3"
              onChange={handleChange}
              checked={selected === 3}
            />
            <label htmlFor="num3">3</label>
          </li>
          <li>
            <input
              type="radio"
              id="num4"
              name="scale"
              value="4"
              onChange={handleChange}
              checked={selected === 4}
            />
            <label htmlFor="num4">4</label>
          </li>
          <li>
            <input
              type="radio"
              id="num5"
              name="scale"
              value="5"
              onChange={handleChange}
              checked={selected === 5}
            />
            <label htmlFor="num5">5</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScaleSelect;
