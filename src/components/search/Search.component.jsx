import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "./Search.style";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitForm = (e) => {
    e.preventDefault();

    navigate("searched/" + input);
  };
  return (
    <Form onSubmit={submitForm}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </Form>
  );
}

export default Search;
