import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const Model = () => {

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1})
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);
  
  return (
    <section className="common-padding bg-zinc">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Explore the full story.
        </h1>

        <div className="hiw-feature-text-container md:mt-16">
          <div className="flex flex-col">
            <p className="feature-text-heading g_text">Intuitive Interface {' '}</p>
            <p className="feature-text g_text">
              A <span className="text-white">user-friendly interface </span>that simplifies the chat experience.
            </p>

            <p className="feature-text-heading g_text">Code Syntax Highlighting {' '}</p>
            <p className="feature-text g_text">
              Code readability with <span className="text-white">syntax highlighting </span>feature.
            </p>

            <p className="feature-text-heading g_text">Multiple Model Support {' '}</p>
            <p className="feature-text g_text">
              Seamlessly <span className="text-white">switch between different chat models</span>.
            </p>

            <p className="feature-text-heading g_text">Chat History {' '}</p>
            <p className="feature-text g_text">
              <span className="text-white">Remembers chat </span>and knows topic you are talking.
            </p>

            <p className="feature-text-heading g_text">Chat Store {' '}</p>
            <p className="feature-text g_text">
              <span className="text-white">Chat will be saved in db </span>and can be accessed later time.
            </p>

            <p className="feature-text-heading g_text">Generate Images {' '}</p>
            <p className="feature-text g_text">
              <span className="text-white">Image generation capabilities </span>using DALL-E.
            </p>

            <p className="feature-text-heading g_text">Attach Images {' '}</p>
            <p className="feature-text g_text below-640:mb-16">
              <span className="text-white">Upload images </span>for code and text generation.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Model