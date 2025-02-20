// import React, { useEffect, useRef, useState, useCallback } from "react";
import "./About.css";

import { TypeAnimation } from "react-type-animation";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  OKShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";

import React, { useEffect } from "react";
import Spheres1Background from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js";

import Game from "../Game/Game";

//import { Link, animateScroll as scroll } from "react-scroll";

function About() {
  //const shareUrl = "http://github.com";
  const shareUrl = [
    {
      url: "http://github.com",
      icon: <FacebookIcon size={32} round />,
      Button: FacebookShareButton,
    },
    {
      url: "http://github.com",
      icon: <XIcon size={32} round />,
      Button: TwitterShareButton,
    },
    {
      url: "http://github.com",
      icon: <EmailIcon size={32} round />,
      Button: EmailShareButton,
    },
    {
      url: "http://github.com",
      icon: <WhatsappIcon size={32} round />,
      Button: WhatsappShareButton,
    },
  ];

  useEffect(() => {
    const canvas = document.getElementById("webgl-canvas");
    if (canvas) {
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const getRandomColor = () => {
        return Math.floor(Math.random() * 16777215);
      };

      const colors = [getRandomColor(), getRandomColor(), getRandomColor()];

      const background = Spheres1Background(
        canvas,
        {
          count: 300,
          minSize: 0.3,
          maxSize: 1,
          gravity: 0.1,
          colors: colors, // Thêm màu ngẫu nhiên vào đây
        },
        []
      );

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        if (background && typeof background.destroy === "function") {
          background.destroy();
        }
      };
    }
  }, []);

  //ấn nút scroll-down để scroll đến game

  return (
    <>
      <section className="section section-hero interactive-element">
        <h1 className="h1 hero-title">
          Something <br /> About me
        </h1>
      </section>
      <canvas id="webgl-canvas"></canvas>

      {/* About Section */}
      <section className="section section-about">
        <br /> <br />
        <h2>About RF</h2>
        <TypeAnimation
          style={{ whiteSpace: "pre-line", display: "block" }}
          sequence={[
            `Welcome to RF, where music meets creativity! 🎶✨\n
            Join me on this musical journey—where every song has a story, and every word resonates. 🌟`,
            1000,
          ]}
        />
        {/* hastash */}
        <TypeAnimation
          sequence={[
            "#Songwriting",
            500,
            "#OriginalMusic",
            500,
            "#Lyrics",
            500,
            "#CreativeMusic",
            500,
            "#MusicLovers",
            500,
          ]}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
        <br />
        <h2>Learn More</h2>

        <span class="material-symbols-outlined interactive-element">
          arrow_downward
        </span>
        <div className="Demo__container">
          <div className="Demo__some-network">
            {shareUrl.map((share, idx) => {
              return (
                <share.Button
                  key={idx}
                  url={share.url}
                  className="Demo__some-network__share-button"
                >
                  {share.icon}
                </share.Button>
              );
            })}
          </div>
        </div>
      </section>
      <section class="section section-text">
        <h2>About Me</h2>
        <div className="about-text">hahah hiihi</div>
      </section>
      <section className="newsletter-inset-shadow">
        {[...Array(10)].map((_, i) => (
          <p key={i}>What about me?</p>
        ))}
      </section>

      <Game
        size={450}
        className="game-component"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "lightblue",
          zIndex: 1000,
        }}
      />

    </>
  );
}

export default About;
