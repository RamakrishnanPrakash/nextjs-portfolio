"useClient";

import { useEffect, useState } from "react";

const UrlTypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const data = "/api/v0/portfolio/project";
  const [url, setUrl] = useState("");

  let isForward = true;

  useEffect(() => {
    if (index === data.length) {
      isForward = false;
    }

    if (isForward) {
      const timeout = setTimeout(() => {
        setUrl((prev) => prev + data[index]);
        setIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }

    if (!isForward) {
      const nextTimeout = setTimeout(() => {
        setUrl(data.slice(0, 7));
        setIndex(7);
      }, 1000);
      return () => clearTimeout(nextTimeout);
    }
  }, [index, data]);

  return (
    <div className="">
      <span className=" text-lg font-bold bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
        {url}
      </span>
      <span className="text-white text-lg font-bold">|</span>
    </div>
  );
};

export default UrlTypingAnimation;
