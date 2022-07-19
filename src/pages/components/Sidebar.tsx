import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="fixed left-0 top-16 h-screen border-r w-44 shadow-md">
      <div className="flex flex-col justify-center items-center">
        <a href="/createPost" className="mt-5 flex">
          <svg
            width="27"
            height="49"
            viewBox="0 0 27 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8408 67.0945L2.84168 66.904L3.34972 10.9063C3.39982 5.38365 7.91741 0.9473 13.44 0.997404L14.44 1.00648C19.9626 1.05658 24.399 5.57417 24.3489 11.0968L23.8408 67.0945Z"
              fill="black"
            />
            <path
              d="M14.0306 95.2547C13.7132 96.1519 12.4404 96.1403 12.1393 95.2376L2.96417 67.7301C2.74697 67.0789 3.23544 66.4075 3.92187 66.4137L22.7696 66.5847C23.456 66.5909 23.9322 67.2711 23.7033 67.9182L14.0306 95.2547Z"
              fill="black"
            />
            <path
              d="M14.0825 89.3147C13.7617 90.204 12.4999 90.1926 12.1952 89.2975L6.95448 73.9008C6.64053 72.9785 7.7233 72.1657 8.56803 72.6512C12.1444 74.7066 14.7249 74.7957 17.7282 73.1161C18.6117 72.622 19.793 73.4854 19.4495 74.4376L14.0825 89.3147Z"
              fill="white"
            />
            <rect
              x="24.2943"
              y="17.0964"
              width="21"
              height="2"
              transform="rotate(-179.48 24.2943 17.0964)"
              fill="white"
            />
          </svg>
          <p>Write</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
