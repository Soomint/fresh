'use client'

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let foodList = ['Tomatoes', 'Pasta', 'Coconut'];
  const [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      { foodList.map((food, index) => {
        return (
          <div className="food" key={index}>
            <Image src={`/food${index}.png`} className="food-img" width={500} height={400}/>
            <h4>{food} $40</h4>
            <span> {count[index]} </span>
            <button onClick={() => {
              const copy = [...count];
              copy[index] = copy[index]+ 1;
              setCount(copy)
            }}>+</button>
            {/* <button onClick={() => {setCount(count-1)}}>-</button> */}
          </div>
        )
      })}
    </div>
  )
}
  