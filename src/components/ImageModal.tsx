import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  src: string;
  onClose: () => void;
}

const ImageModal = ({ src, onClose }: Props) => {

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
          className="fixed inset-0 bg-ctp-mantle/60 flex justify-center items-start z-50 py-10 overflow-y-auto"
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
      
      {/* イメージ */}
      <motion.img src={ src } className="w-auto min-w-[40vw] max-w-[90vw] rounded-xl" onClick={(e) => e.stopPropagation()} initial={{scale:0.8, opacity: 0}} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} />
    </motion.div>
    </AnimatePresence>
    // <div className="fixed inset-0 bg-ctp-mantle flex itens-center justify-center z-50" onClick={onClose}>
    //   <img src={src} className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl" onClick={(e) => e.stopPropagation()} />
    // </div>
  );
};

export default ImageModal;