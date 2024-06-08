"use client";
import { useState } from "react";
import Checkbox from "./Checkbox";

const Home = () => {
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option: string) => (checked: boolean) => {
    setOptions({
      ...options,
      [option]: checked,
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Options</h1>
      <div className="space-y-4">
        <Checkbox
          label="Option 1"
          checked={options.option1}
          onChange={handleCheckboxChange("option1")}
        />
        <Checkbox
          label="Option 2"
          checked={options.option2}
          onChange={handleCheckboxChange("option2")}
        />
        <Checkbox
          label="Option 3"
          checked={options.option3}
          onChange={handleCheckboxChange("option3")}
        />
      </div>
    </div>
  );
};

export default Home;
