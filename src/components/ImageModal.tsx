import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  src: string;
  titletext: string;
  desc?: string;
  onClose: () => void;
}

const ImageModal = ({ src, titletext, desc, onClose }: Props) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);


  return (
    <AnimatePresence>
      <motion.div
          className="fixed inset-0 bg-ctp-mantle/90 backdrop-blur-xs flex justify-center z-50"
          onClick={ onClose }
          initial={ { opacity: 0 } }
          animate={ { opacity:1 } }
          exit={ { opacity:0 } }
          transition={ { duration:0.2 } }
      >

      {/* close button */}
      <button className="fixed top-6 right-6 text-ctp-text hover:bg-ctp-crust p-2 rounded-full transition z-50" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      
      {/* Modal */}
      <motion.div
        className="flex flex-row gap-10"
        onClick={ (e) => e.stopPropagation() }
        initial={ { scale:0.8, opacity:0 } }
        animate={ { scale:1, opacity:1 } }
        exit={ { scale:0.85, opacity:0 } }
        transition={ {type:"spring", stiffness: 200, damping: 20 } }
      >

      {/* イメージ */}
      <img src={ src } className="max-w-[90%] max-h-[60%] rounded-xl shadow-xl mt-6 ml-10" />

      <motion.div
        className="flex flex-col"
        onClick={ (e) => e.stopPropagation() }
        initial={ { scale:0.8, opacity:0 } }
        animate={ { scale:1, opacity:1 } }
        exit={ { scale:0.85, opacity:0 } }
        transition={ {type:"spring", stiffness: 200, damping: 20 } }
      >

      { /* titel */ }
      { titletext && ( 
        <p className="text-ctp-text text-5xl text-left mt-10 mb-10">
          { titletext }
        </p>
        
      )}

      {/* dekripton */}
      { desc && (
        <p className="text-ctp-text text-left mt-4 text-2xl mr-20">
        { desc }
        </p>
      )}
        </motion.div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
    // <div className="fixed inset-0 bg-ctp-mantle flex itens-center justify-center z-50" onClick={onClose}>
    //   <img src={src} className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl" onClick={(e) => e.stopPropagation()} />
    // </div>
  );
};

export default ImageModal;