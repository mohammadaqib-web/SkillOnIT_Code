"use client";

import { useEffect, useState } from "react";

function About() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("/api/users");
      const result = await res.json();

      setData(result.message);
    }

    getUsers();
  }, []);

  return <div>{data}</div>;
}

export default About;