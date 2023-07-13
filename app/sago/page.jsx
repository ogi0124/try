'use client'
/*import Link from "next/link"

export default function Home() {
  let name = "park"
  return (
    <div>
      <h4 className="title" style={{fontSize : '30px'}}>애플후래시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}*/


/*import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  return (
    <ul className="my-auto">
      {countries?.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}*/


import React from 'react'; //React는 객체, react는 라이브러리 이름
import ReactDOM from 'react-dom';
export default function Index() {
    const [inputValue, setInputValue] = React.useState(''); //React:라이브러리, 훅: api

    const showInput = function () {
        const inputElement = document.getElementById("userInput")
        const inputValue = inputElement.value
        setInputValue(inputValue)
    }
    async function postData(url, data) {
        const response = await fetch(url, {
            method: 'POST', //fetch : promise 반환 -> promise는 이행되면 응답 객체로 반환 
            headers: {
                'Content-Type': 'application/json',
            },
            body: { 'name': data }, // await으로 이행될 때까지 대기되어 response 변수에는 응답 객체 저장됨(Response 객체)
        });
        return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
    }

    postData('https://example.com/answer', { inputValue }).then((data) => {
        console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨/ data : 객체임(response.json())
    });

    return (
        <div>
            <input type="text" id="userInput" placeholder="질문을 하시오" />
            <button className="border-black border-2 px-1" onClick={showInput}>제출</button>
            <div>{"질문: " + inputValue}</div>
            <div>답변:</div>
        </div>
    )
}