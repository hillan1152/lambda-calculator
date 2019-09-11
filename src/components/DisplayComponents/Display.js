import React, { useState } from "react";

const Display = (props) => {
  const [count, setCount] = useState(0);

  const number = () => {
    setCount(count => count.number)
  }
  return <div className="display">{/* Display any props data here */
    (
      <span>{count}</span>
    )
  }
  
  </div>;
};

export default Display;
