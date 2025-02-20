//import "./Home.css";

import React from "react";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//import { Parallax, ParallaxLayer } from "react-parallax";

import "./Home.css";

import { thumbnails, contactImg } from "../../assets/images";
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

import { useState, useEffect } from "react";
//import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4';
import gsap from "https://cdn.skypack.dev/gsap@3.12.0";

import Swiper from "swiper";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Home() {
  const [lines, setLines] = useState([]);
  const [index, setIndex] = useState(0);
  // gsap stuff!
  gsap.defaults({
    duration: 1,
  });
  useEffect(() => {
    const lines = gsap.utils.toArray("ul li");
    setLines(lines); // Set lines after component is mounted

    // Initialize the timeline once
    const tl = gsap.timeline({
      paused: true,
    });

    gsap.set("ul li", { yPercent: 300 });

    const paddedLines = [...lines, ...lines, ...lines];
    paddedLines.forEach((line, index) => {
      const lineTl = gsap.timeline().set(line, { yPercent: 300 }).to(
        line,
        {
          yPercent: "-=600",
          repeatRefresh: true,
          immediateRender: false,
          ease: "none",
          duration: 6,
        },
        0
      );
      tl.add(lineTl, index);
    });

    const scrubber = gsap.timeline({ paused: true }).fromTo(
      tl,
      {
        totalTime: lines.length + 1,
      },
      {
        totalTime: lines.length * 2 + 1,
        ease: "none",
        duration: lines.length,
        repeat: -1,
      }
    );
    gsap.set(scrubber, { totalTime: lines.length + 2 });

    const syncIndicator = () => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (lines[newIndex % lines.length]) {
          gsap.set(".indicator", {
            "--width":
              lines[newIndex % lines.length].getBoundingClientRect().width,
            "--h": gsap.utils.random(0, 359),
          });
        }
        return newIndex % lines.length;
      });
    };

    gsap.to(scrubber, {
      delay: 1,
      totalTime: "+=1",
      duration: 1,
      repeat: -1,
      repeatDelay: 1,
      repeatRefresh: true,
      onStart: syncIndicator,
      onRepeat: syncIndicator,
      ease: "elastic.out(1, 0.875)",
    });

    gsap.set(".container-fluid", { opacity: 1 });

    // Cleanup
    return () => {
      tl.kill();
      scrubber.kill();
    };
  }, []); // Empty dependency array, run once

  // SWIPER TABNINE
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
      modules: [EffectCards],
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="home-page"
        style={{
          width: "100%",
          height: "100%",
          //backgroundImage: `url(${require("../../assets/mini-img/books.png")})`,
        }}
      >
        {/* Sidebar Section */}
        <aside className="sidebar">
          <strong>Information</strong>
          <p>
            <small>Get the latest updates on RosaFlora</small>
          </p>
          <date>
            <small>Sat Feb 15th, 2025</small>
          </date>
        </aside>

        {/* Hero Section */}
        <div className="hero">
          <section className="section section-hero interactive-element">
            <h1 className="h1 hero-title">Appreciate you visiting my page</h1>
          </section>
          <br />
          <h1>
            The new song「How Do You Tell Me You Love Me and Leave? | [RF] |
            Official Music Video」[RF]'s Latest Release『This emotional track,
            full of raw lyrics and heartfelt melodies, explores themes of love,
            heartbreak, and self-discovery -』☆ New single "Me | [RF] | Official
            Music Video | Emotional Song" will be released on March 14, 2025!
          </h1>

          <br />
          <p>Check out the latest hits, music videos, and more!</p>
        </div>

        {/* About Section */}
        {/* <section className="about bg-gradient-to-b from-[#FEFED9] to-[#FDFDB8]">
          <br />
          <h2>About RF</h2>
          <p>
            Welcome to RF, where music meets creativity! 🎶✨ Join me on this
            musical journey—where every song has a story, and every word
            resonates. 🌟
          </p>

          <p>
            <hashtag>
              #Songwriting #OriginalMusic #Lyrics #CreativeMusic #MusicLovers
            </hashtag>
          </p>

          <br />
          <p>Learn More</p>
          <a href="https://www.youtube.com/channel/UCA9yz0dD9ma2YaENgukmriA/?sub_confirmation=1">
            Youtube
          </a>
          <a href="https://www.facebook.com/profile.php?id=61561321138691">
            Facebook
          </a>
        </section> */}

        {/* Music Section */}
        <section className="music">
          <h2>Favourite songs</h2>
          <div className="album">
            <section className="swiper-list-img">
              <div class="content">
                <div class="info">
                  <p>
                    Join me on this musical journey—where every song has a
                    story, and every word resonates.As we traverse this vibrant
                    landscape of melodies, we'll uncover the hidden narratives
                    woven into each note, a tapestry of emotions and experiences
                    that reflect the human spirit. Each track invites us to
                    listen closely, to feel the pulse of joy, the ache of
                    heartbreak, and the solace found in both the highs and lows
                    of life.
                  </p>
                  <button
                    class="btn"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@RosaFlora-358/playlists"
                      )
                    }
                  >
                    Join with me
                  </button>
                </div>

                <div class="swiper">
                  <div class="swiper-wrapper">
                    {thumbnails.map((thumbnail, index) => {
                      return (
                        <>
                          <div class="swiper-slide" key={index}>
                            <img src={thumbnail.src} alt={thumbnail.alt} />
                            <div class="overlay">
                              <h2>{thumbnail.alt}</h2>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Events Section */}
        <section className="newsletter">
          <p>
            In the rhythm of our hearts, we discover echoes of laughter and
            whispers of tears, as we dance through the memories that shape us.
            We’ll celebrate the timeless anthems that unite generations, those
            harmonies that sing of love found and lost, of dreams chased and
            fears faced.
          </p>
          <p>
            Let the music be our guide—a soundtrack to our stories, a companion
            on our journey. With every chord we strum and every lyric we sing,
            let’s dive deep into the transformative power of sound. Together, we
            will embrace the beauty of vulnerability, the strength in
            storytelling, and the connections formed through the universal
            language of song.
          </p>
          <p>
            So, come ride the waves of this sonic adventure, where every melody
            opens doors to deeper understanding and every harmony reveals the
            richness of our shared humanity. Let the journey unfold, one note at
            a time, as we revel in the symphony of life.
          </p>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <br />
          <h2>Contact</h2>
          <p>
            <small>For business inquiries, please contact:</small>
          </p>
          <div className="Demo__container">
            {/* facebook */}
            <div className="Demo__some-network">
              <FacebookShareButton
                url={"https://www.facebook.com/profile.php?id=61561321138691"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            {/* messenger */}
            <div className="Demo__some-network">
              <FacebookMessengerShareButton
                url={"https://www.messenger.com/"}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
            </div>
            {/* twitter */}
            <div className="Demo__some-network">
              <TwitterShareButton
                url={"https://x.com/RosaFlora358"}
                title="X"
                className="Demo__some-network__share-button"
              >
                <XIcon size={32} round />
              </TwitterShareButton>
            </div>
            {/* Whatsapp */}
            <div className="Demo__some-network">
              <WhatsappShareButton
                url={"https://web.whatsapp.com/"}
                title="WhatsApp"
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
            {/* Reddit */}
            <div className="Demo__some-network">
              <RedditShareButton
                url={"https://www.reddit.com/user/Agile_Action_2475/"}
                title="Reddit"
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button"
              >
                <RedditIcon size={32} round />
              </RedditShareButton>
            </div>
            {/* Mail.ru */}
            <div className="Demo__some-network">
              <MailruShareButton
                url={"rosaflora358@gmail.com"}
                title="Mail.ru"
                className="Demo__some-network__share-button"
              >
                <MailruIcon size={32} round />
              </MailruShareButton>
            </div>
            {/* Mail */}
            <div className="Demo__some-network">
              <EmailShareButton
                url={"rosaflora358@gmail.com"}
                subject="Mail"
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>

          <div className="container-fluid fluid">
            <div className="indicator"></div>
            <ul>
              <li>I don't</li>
              <li>know</li>
              <li>about</li>
              <li>you</li>
              <li>But</li>
              <li>I</li>
              <li>think</li>
              <li>that</li>
              <li>I'm</li>
              <li>going</li>
              <li>insane</li>
              <li>Ahh~</li>
              <li style={{ width: "1.5em" }}>🌈</li>
            </ul>
          </div>

          <br />
          <div className="contact-info">
            {contactImg.map((contact, index) => {
              return (
                <div key={index} className="contact-item">
                  <img src={contact.src} alt={contact.alt} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
