  import image from '../assets/img/avatar-qui-suis-je.jpg';
  import { motion } from "framer-motion";

  const Hero = () => {
    return (
  /**Container parents*/
    <section className="mt-[100px] px-16 flex min-h-screen w-full items-center justify-center pb-8 md:px-32 z-0">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          <motion.div
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity:1}}
            transition={{duration: 0.8, delay:0.2}}
          >
            <a id="hero"
              href="https://www.linkedin.com/in/soidroudine-said-329312242/" 
              target="_blank" 
              rel="noopener noreferrer" 
              >
                <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md/w-[350px] z-0"/></a>
            </motion.div>
                  <motion.div 
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity:1}}
                    transition={{duration: 0.8, delay:0.2}}
                        className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
                  <h2 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl'>Said Soidroudine</h2>
              <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-2xl md:text-3xl'>Développeur Full-Stack</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>Développeur Full-Stack junior, c'est avant tout d'avoir une posture professionnelle ce qui me permet de m’intégrer rapidement dans des environnements variés et de relever de nouveaux défis avec aisance. Mes bonnes capacités de communication et de mémorisation garantissent une bonne gestion du stress, une collaboration efficace et une performance constante, même sous pression. 
      </p>
      </motion.div>
      </div>
      </section>
    )
  }

  export default Hero
