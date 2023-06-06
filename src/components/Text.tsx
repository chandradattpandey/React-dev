import { useState } from "react";

interface Props {
  maxCount : number;
}
const Text = ({maxCount}:Props) => {
 const [isExpandable, setIsExpendable] =  useState(false);
  const textData = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Deserunt sunt, eos eveniet, illum porro vero veritatis modi in quod voluptatem explicabo nisi,
  ea ipsa dicta. Fugiat, unde maiores! Iure, illum dolorum.
  Assumenda animi suscipit inventore illo quos maxime eum, possimus odio, incidunt reiciendis accusantium ab unde.
  Magni illo iure, ullam recusandae iusto quis deserunt distinctio consequatur temporibus eum atque quasi.
  Fugiat aperiam accusamus corporis facilis voluptas esse corrupti molestias est iure labore impedit, quod,
  laborum magnam sed quos dolores inventore. Laboriosam modi officiis quis deserunt iure debitis sequi cum placeat dignissimos ad,
  mollitia amet asperiores tempore, molestiae tempora doloribus! Aperiam?`

  if(textData.length <= maxCount) return <div>{textData}</div>
  const shortData = isExpandable? textData : textData.substring(0, maxCount);
  
  return (
    <p>{shortData}...<button className="btn btn-secondary" onClick={()=>{setIsExpendable(!isExpandable)}} >{isExpandable? "More" : "Less"}</button></p>
  )
}

export default Text