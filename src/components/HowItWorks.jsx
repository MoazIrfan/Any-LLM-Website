import React, { useRef } from 'react'
import { frameLaptopImg, frameMobileImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import useWindowDimensions from '../utils/windowDimension'
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const { width } = useWindowDimensions();
  const videoRef = useRef();

  useGSAP(() => {
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width mb-16">

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            ChatGPT.
            <br /> GPT 4 Template.
          </h2>

          <p className="hiw-subtitle">
             for Utilizing Any OpenAI Language Model.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden rounded-custom">
              <img 
                src={width > 1200 ? frameLaptopImg : frameMobileImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Any LLM: Dashboard</p>
        </div>

        <div className="hiw-text-container">
          <p className="hiw-text g_fadeIn">
            <span className="text-white">React(MERN) </span>ChatGPT Template to utilize any OpenAI Language Model, i.e. {' '}
            <span className="text-white">
              GPT-3, GPT-4, Davinci, DALL-E {' '}
            </span>and more.
          </p>
          <p className="hiw-text g_fadeIn">
            Interact with AI through conversational interface, with control over the behavior of LLMs.
          </p>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks