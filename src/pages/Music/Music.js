import React, { useEffect, useRef } from "react";
import "./Music.css";

//import { Link, animateScroll as scroll } from "react-scroll";

function Music() {
  const interBubbleRef = useRef(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    function handleMouseMove(event) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="section section-hero interactive-element">
        <h1 className="h1 hero-title">
          Enjoy <br /> your time
        </h1>
      </section>
      <br /> <br />
      <label
        class="pressure"
        data-textfirst="Are you feeling STRESSED?"
        data-textsecond="Listen!"
      >
        <input type="checkbox" />
      </label>
      
      <section className="newsletter-weird">
        <p>
          Music has a profound impact on our mental and emotional well-being.
          Studies have shown that music can reduce stress, improve mood, and
          even enhance focus. When we listen to music, our brain releases
          neurotransmitters like dopamine, which help create feelings of
          relaxation and happiness. Additionally, music serves as a powerful
          medium for connecting people, especially in shared emotional
          experiences and communication. As a result, music has become an
          integral part of everyday life, offering a way to express emotions and
          enhance social bonds.
        </p>
      </section>

      

      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
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
          <div ref={interBubbleRef} className="interactive"></div>
        </div>
      </div>
      <section className="newsletter-weird">
        <p>
          Listening to music also stimulates creativity and aids in learning.
          Music has been found to enhance memory and improve cognitive skills by
          activating brain regions associated with thinking and recall. Research
          indicates that listening to music while studying can help maintain
          concentration and boost retention, making it easier to absorb new
          information. Thus, music plays a significant role in both personal
          well-being and intellectual development.
        </p>
      </section>
      <div className="text-container bye">bye.</div>
      {/* <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
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
          <div ref={interBubbleRef} className="interactive"></div>
        </div>
      </div> */}
    </>
  );
}

export default Music;
