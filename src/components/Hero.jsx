import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo } from '../utils';

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">WebUI for LLMs</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={heroVideo}>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="https://github.com/MoazIrfan/Any-LLM" target="_blank" className="bg-zinc hover:bg-transparent border border-zinc hover:border hover:border-zinc text-white py-3 px-6 rounded-full shadow">Github</a>
        <p className="font-normal md:text-xl text-sm mt-4">Download Free</p>
      </div>
    </section>
  )
}

export default Hero