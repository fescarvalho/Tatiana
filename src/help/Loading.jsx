import { useEffect, useState } from "react";
import "./Loading.css";

const Loading = () => {
  const [step, setStep] = useState(0);

  function displayStep(i) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 2) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 350);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="loading">
        <svg
          width="490"
          height="503"
          viewBox="0 0 490 503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style={displayStep(0)}>
            <path
              d="M239.001 219.652C230.667 194.988 189 198.804 189 235.868C189 254.354 201.751 278.931 239.001 304C276.251 278.928 289 254.354 289 235.868C289 199.031 247.334 194.988 239.001 219.652Z"
              fill="#ED1C24"
            />
          </g>
          <g style={displayStep(1)}>
            <path
              d="M237.58 185.783L239.001 189.989L240.422 185.783C248.465 161.979 272.612 151.927 294.927 156.859C317.121 161.764 337.5 181.566 337.5 217.736C337.5 253.858 312.656 302.376 239.001 352.191C165.346 302.383 140.5 253.858 140.5 217.736C140.5 181.335 160.883 161.538 183.071 156.689C205.383 151.814 229.535 161.974 237.58 185.783Z"
              fill="#FF0404"
              stroke="#FF0202"
              strokeWidth="3"
            />
          </g>
          <g style={displayStep(2)}>
            <rect
              x="109.406"
              y="115.82"
              width="43"
              height="2"
              rx="1"
              transform="rotate(-135 109.406 115.82)"
              fill="#FF0101"
            />
            <rect
              x="367"
              y="114.387"
              width="43"
              height="2"
              rx="1"
              transform="rotate(-44.965 367 114.387)"
              fill="#FF0101"
            />
            <rect
              x="239"
              y="85"
              width="43"
              height="2"
              rx="1"
              transform="rotate(-90 239 85)"
              fill="#FF0101"
            />
            <rect
              x="239"
              y="465"
              width="43"
              height="2"
              rx="1"
              transform="rotate(-90 239 465)"
              fill="#FF0101"
            />
            <rect x="396.419" y="251.901" width="43" height="2" rx="1" fill="#FF0101" />
            <rect
              x="372.406"
              y="380.82"
              width="43"
              height="2"
              rx="1"
              transform="rotate(-135 372.406 380.82)"
              fill="#FF0101"
            />
            <rect x="38.4099" y="251.91" width="43" height="2" rx="1" fill="#FF0101" />
            <rect
              x="110.59"
              y="379.496"
              width="43"
              height="2"
              rx="1"
              transform="rotate(-45 110.59 379.496)"
              fill="#FF0101"
            />
            <path
              d="M237.581 151.435L239.002 155.641L240.423 151.435C252.632 115.299 289.279 100.092 323.052 107.556C356.704 114.994 387.5 145.016 387.5 199.604C387.5 254.211 349.907 327.303 239.002 402.191C128.096 327.314 90.5 254.211 90.5 199.604C90.5 144.67 121.3 114.654 154.946 107.301C188.716 99.9218 225.369 115.294 237.581 151.435Z"
              fill="#FF0404"
              stroke="#FF0404"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
