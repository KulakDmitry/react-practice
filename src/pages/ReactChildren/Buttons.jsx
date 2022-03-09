import React from "react";
import Button from "./Button";

export default function Buttons() {
  return (
    <div className="text-center">
      <Button onClick={() => console.log("hello1")}>text1</Button>
      <Button onClick={() => console.log("hello2")}>text2</Button>
    </div>
  );
}
