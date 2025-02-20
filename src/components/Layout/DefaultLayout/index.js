import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";

import React, { useEffect, useRef } from "react";

function DefaultLayout({ children }) {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      // Điều chỉnh vị trí dần dần của interBubble về vị trí mục tiêu
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }

      // Tiếp tục gọi requestAnimationFrame sau mỗi vòng lặp
      requestAnimationFrame(move);
    }

    function handleMouseMove(event) {
      tgX = event.clientX; // Lấy vị trí của chuột theo chiều ngang
      tgY = event.clientY; // Lấy vị trí của chuột theo chiều dọc
    }

    window.addEventListener("mousemove", handleMouseMove);
    move(); // Bắt đầu vòng lặp di chuyển

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="layout-container gradient-bg">
        <Parallax pages={9}>
          <Header />
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="g6"></div>
            <div className="g7"></div>
            <div ref={interBubbleRef} className="interactive z-50"></div>
          </div>

          <ParallaxLayer offset={0} speed={0.5}>
            <div className="background-text">
              <div className="RF">RosaFlora</div>
              OFFICIAL WEBSITE
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={-0.15} speed={0}>
            <div className="text-content">{children}</div>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#E97451" }} />
          <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: "#483C32" }} /> */}

          {/* <ParallaxLayer offset={0.5} speed={-0.2} style={{ opacity: 0.6 }}>
            <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ display: "block", width: "15rem", marginLeft: "55rem" }} />
            <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ display: "block", width: "14rem", marginLeft: "15rem" }} />
          </ParallaxLayer> */}

          <ParallaxLayer offset={4.5} speed={0} style={{ opacity: 0.6 }}>
            <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ display: "block", width: "15rem", marginLeft: "10rem" }} />
            <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ display: "block", width: "14rem", marginLeft: "55rem" }} />
            <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ display: "block", width: "13rem", marginRight: "55rem" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={4.7} speed={0} style={{ opacity: 0.6 }}>
            <img alt="cloud" src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png" style={{ display: "block", width: "13rem", marginLeft: "70rem" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={8} speed={0}>
            <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 0 }}>
              <Footer />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default DefaultLayout;
