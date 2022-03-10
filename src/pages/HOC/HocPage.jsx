import React from "react";
import withName from "../HOC/withName";

const Hello = ({ name, age }) => (
  <h1>
    Hello {name}! your age is {age}
  </h1>
);

const NewComponent = withName(Hello);

export default function HocPage() {
  return (
    <div className="text-center">
      <NewComponent name="dima" age="25" />
      <NewComponent age="UserAge" />
    </div>
  );
}
