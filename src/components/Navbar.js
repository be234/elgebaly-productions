import { useState } from 'react';
import { BsInstagram, BsPinterest, BsFacebook } from 'react-icons/bs';
import { HiOutlineXMark } from 'react-icons/hi2';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { AnimatePresence, motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.2}
    },
    exit: {
     opacity: 0,
     transition: {ease: 'easeInOut' } 
    }
  }

const Navbar = () => {
    
    const [bars, setbars] = useState(false);
    return ( 
        <div className="nav">
            <nav className="navbar">
                <h3 className={bars ? "text-transparent" : 'text-gray-dark-3'}><BsInstagram /></h3>
                
                <div className='elgebaly'>
                   <h1>ELGEBALY</h1>
                   <p>Photography</p>
                </div>

                           <AnimatePresence>
        {!bars && <motion.h2
           initial={{ opacity: 0, scaleY: 0 }}
           animate={{ opacity: 1, scaleY: 1 }}
           exit={{ opacity: 0, position: "absolute", scaleY: 1 }} 
           transition={{duration: .2}}onClick={() => setbars(!bars)}><HiOutlineBars3 /></motion.h2> }
                   </AnimatePresence>
       <AnimatePresence>
            {bars && <motion.h2
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, position: "absolute", scale: 0 }} 
           transition={{duration: .2}}onClick={() => setbars(!bars)}><HiOutlineXMark /></motion.h2> }
           </AnimatePresence>
            </nav>

            <AnimatePresence>
            {bars && (<motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="nav-modal-phone">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">The Experience</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="nav-modal-footer">
                    <h3>Follow Me</h3>
                  <ul>
                    <li><BsInstagram /></li>
                    <li><BsPinterest /></li>
                    <li><BsFacebook /></li>
                  </ul>
                </div>
            </motion.div>)}
                       </AnimatePresence>


            
        
        </div>
     );
}
 
export default Navbar;