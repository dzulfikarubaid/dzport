import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ image }) => {
  return (
    <motion.div
      className="slide"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Slide;
