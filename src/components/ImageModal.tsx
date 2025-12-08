import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  src: string;
  caption?: string;
  onClose: () => void;
}

const ImageModal = ({ src, caption, onClose }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
          className="fixed inset-0 bg-ctp-mantle/60 backdrop-blur-sm flex itens-center justify-center z-50"
          onClick={ onClose }
          initial={ { opacity: 0 } }
          animate={ { opacity:1 } }
          exit={ { opacity:0 } }
          transition={ { duration:0.2 } }
      >

      {/* X */}
      <button className="fixed top-6 right-6 text-ctp-text hover:bg-ctp-crust p-2 rounded-full transition z-50" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      
      {/* Modal */}
      <motion.div
        className="flex flex-col items-center"
        onClick={ (e) => e.stopPropagation() }
        initial={ { scale:0.8, opacity:0 } }
        animate={ { scale:1, opacity:1 } }
        exit={ { scale:0.85, opacity:0 } }
        transition={ {type:"spring", stiffness: 200, damping: 20 } }
      >

      {/* Imeji */}
      <img src={ src } className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl mt-6" />

      {/* Kepsyen */}
      { caption && (
        <p className="text-ctp-text text-center mt-4 text-2xl max-w-[80vw]">
        { caption }
        </p>
      )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
    // <div className="fixed inset-0 bg-ctp-mantle flex itens-center justify-center z-50" onClick={onClose}>
    //   <img src={src} className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl" onClick={(e) => e.stopPropagation()} />
    // </div>
  );
};

export default ImageModal;