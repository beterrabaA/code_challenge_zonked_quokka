"use client";
import { useState } from "react";

export function Formater({ values, raw }: { values: string[]; raw: any }) {
  const [inputValue, setInputValue] = useState<number>(0);
  const [currency, setCurrency] = useState(values[0]);
  console.log(raw);

  return (
    <section>
      <input
        type="number"
        value={inputValue || 0}
        onChange={(event) => setInputValue(Number(event.target.value))}
      />
      <select
        name=""
        id=""
        onChange={(e) => {
          setCurrency(e.target.value);
        }}
        value={currency}
      >
        {values.map((e: string) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <p>Converted Value: $ {inputValue && inputValue * raw[currency]}</p>
    </section>
  );
}
