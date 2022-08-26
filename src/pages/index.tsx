import * as React from "react";

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.title}</button>;
};

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-blue-500 text-3xl bg-[#222]">hello world</h1>
      <Button title="hello"></Button>
    </main>
  );
};

export default IndexPage;
