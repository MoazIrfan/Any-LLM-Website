import { useState } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { models } from "../constants";

const Model = () => {
  const [model, setModel] = useState({
    label: 'Generate Images', 
    value: " Image generation capabilities using DALL-E"
  })

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Enjoy the benefits of GPT 4.
        </h1>

        <div className="flex flex-col items-center md:mt-20 mt-10">

          <div className="my-10 2xl:my-20">
            <h2 className="hiw-title">
              {model.label}
            </h2>
            <p className="hiw-subtitle">
              {model.value}
            </p>
          </div>

          <div className="mx-auto w-full md:mt-20 mt-10">

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: model.label === item.label ? 'white' : '#454749' }} onClick={() => setModel(item)} />
                ))}
              </ul>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Model