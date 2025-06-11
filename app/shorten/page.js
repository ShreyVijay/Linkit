"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState();

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="mx-auto border-1 border-[var(--bdr-color)] max-w-lg bg-[var(--bg-color)] mt-8 mb-8 rounded-lg flex flex-col gap-4">
        <div className="border-b-1 border-b-[var(--bdr-color)] rounded-t-lg px-8 py-6 bg-[var(--bg2-color)]">
          <h1 className="font-bold text-2xl">Generate your URLs</h1>
        </div>
        <div className="flex flex-col gap-2 px-8 pb-8 pt-4">
          <input
            type="text"
            value={url}
            className="bg-[var(--bg2-color)] border-1 border-[var(--bg2-color)] focus:border-1 focus:border-[var(--bdr-color)] focus:bg-[var(--background)] focus:outline-none px-4 py-2 rounded-md"
            placeholder="Enter your URL"
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />

          <input
            type="text"
            value={shorturl}
            className="bg-[var(--bg2-color)] border-1 border-[var(--bg2-color)] focus:border-1 focus:border-[var(--bdr-color)] focus:bg-[var(--background)] focus:outline-none px-4 py-2 rounded-md"
            placeholder="Enter your preferred short URL"
            onChange={(e) => {
              setshorturl(e.target.value);
            }}
          />

          <button
            onClick={generate}
            className="!bg-[var(--background)] rounded-lg shadow-lg p-3 my-3 font-bold focus:shadow-none !border-0 hover:shadow-none transition duration-500 ease-in"
          >
            Generate
          </button>
        </div>
      </div>
      <div className="transition duration-500 ease-in">
        {generated && (
          <>
            <div className="mx-auto border-1 border-[var(--bdr-color)] max-w-lg bg-[var(--bg-color)] my-16 rounded-lg flex flex-col gap-4">
              <div className="border-b-1 border-b-[var(--bdr-color)] rounded-t-lg px-4 py-3 bg-[var(--bg2-color)]">
                <h1 className="font-bold text-g">You Link</h1>
              </div>
              <span>
                <code>
                  <Link
                    target="_blank"
                    href={generated}
                    className=" bg-[var(--bg2-color)] rounded-md font-blue font-bold txt-g w-auto mx-5 mb-5 px-2 py-1 block"
                  >
                    {generated}
                  </Link>
                </code>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shorten;
