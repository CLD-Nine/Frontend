import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { bluePattern } from "@/assets";
import CloudContext from "@/context/CloudContext";
import Welcome from "@/components/Welcome";
import Sleep from "@/components/Sleep";
import Ingredients from "@/components/Ingredients";
import { Loader2 } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
};

const inputVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

const BodyWeight = () => {
  const { setCurrentPage, setBodyWeight, bodyWeight } =
    useContext(CloudContext);

  return (
    <motion.div
      className='flex flex-col'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='relative flex items-center justify-center bg-white'>
        {/* Animated Title */}
        <motion.h1
          className='font-medium tracking-[-2.5px] text-[90px]'
          style={{
            backgroundImage: `url(${bluePattern.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={textVariants}
        >
          Biometrics.
        </motion.h1>
      </div>

      <motion.div
        className='flex flex-col items-end'
        variants={containerVariants}
      >
        <motion.p
          className='text-black text-center font-sans text-[48px] font-light leading-none tracking-[-2.5px] mb-[15px]'
          variants={textVariants}
        >
          Whats your body-weight?
        </motion.p>

        <motion.div variants={inputVariants} className='w-full'>
          <Input
            type='text'
            placeholder='Enter your BW'
            className='w-full bg-[#F2F2F2] placeholder:text-[#888] placeholder:tracking-tighter placeholder:font-light mb-[15px] border-[1px] border-[#DADADA]'
            onChange={(e) => setBodyWeight(e.target.value)}
          />
        </motion.div>

        <motion.div variants={inputVariants}>
          <Button
            variant='next'
            className='text-[18px] font-light tracking-tight'
            size='next'
            onClick={() => setCurrentPage(2)}
            disabled={!bodyWeight}
          >
            Next
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Gender = () => {
  const { setCurrentPage, setGender, gender } = useContext(CloudContext);

  return (
    <motion.div
      className='flex flex-col'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Title Section */}
      <div className='relative flex items-center justify-center bg-white'>
        <motion.h1
          className='font-medium tracking-[-2.5px] text-[90px]'
          style={{
            backgroundImage: `url(${bluePattern.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "hue-rotate(40deg)",
          }}
          variants={textVariants}
        >
          Biometrics.
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.div
        className='flex flex-col items-end'
        variants={containerVariants}
      >
        <motion.p
          className='text-black text-center font-sans text-[48px] font-light leading-none tracking-[-2.5px] mb-[15px]'
          variants={textVariants}
        >
          What sex was assigned to you at birth?{" "}
        </motion.p>

        {/* Gender Buttons */}
        <motion.div
          className='flex flex-row w-full justify-between items-center gap-[10px] mb-[15px]'
          variants={buttonVariants}
        >
          <Button
            variant='lightGrey'
            size='lightGrey'
            className={`rounded-[20px] border-[1px] border-[#DADADA] hover:bg-[#DADADA]/50 ${
              gender == "Male"
                ? "bg-[#dadada]/50 shadow-lg transition-all duration-400 ease-in-out"
                : ""
            }`}
            onClick={() => setGender("Male")}
          >
            Male
          </Button>
          <Button
            variant='lightGrey'
            size='lightGrey'
            className={`rounded-[20px] border-[1px] border-[#DADADA] hover:bg-[#DADADA]/50 ${
              gender == "Female"
                ? "bg-[#dadada]/50 shadow-lg transition-all duration-400 ease-in-out"
                : ""
            }`}
            onClick={() => setGender("Female")}
          >
            Female
          </Button>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <motion.div
        className='flex flex-row items-center justify-end w-full'
        variants={buttonVariants}
      >
        <Button
          variant='next'
          className='text-[18px] font-light tracking-tight'
          size='next'
          onClick={() => setCurrentPage(3)}
          disabled={!gender}
        >
          Next
        </Button>
      </motion.div>
    </motion.div>
  );
};

const Age = () => {
  const { setCurrentPage, setAge, age, makeUser, userId, isLoading } =
    useContext(CloudContext);

  useEffect(() => {
    if (userId) {
      setCurrentPage(4);
    }
  }, [userId]);

  return (
    <motion.div
      className='flex flex-col'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Title Section */}
      <div className='relative flex items-center justify-center bg-white'>
        <motion.h1
          className='font-medium tracking-[-2.5px] text-[90px]'
          style={{
            backgroundImage: `url(${bluePattern.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          variants={textVariants}
        >
          Biometrics.
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.div
        className='flex flex-col items-center'
        variants={containerVariants}
      >
        <motion.p
          className='text-black text-center font-sans text-[48px] font-light leading-none tracking-[-2.5px] mb-[15px]'
          variants={textVariants}
        >
          Last one before we can <br /> chat! What's your age?
        </motion.p>

        {/* Input Animation */}
        <motion.div variants={inputVariants} className='w-full'>
          <Input
            type='text'
            placeholder='Enter your age'
            className='w-full bg-[#F2F2F2] placeholder:text-[#888] mb-[15px] border-[1px] placeholder:tracking-tighter placeholder:font-light border-[#DADADA]'
            onChange={(e) => setAge(e.target.value)}
          />
        </motion.div>
      </motion.div>

      {/* Button Section */}
      {/* TODO: CALL signupv2 */}
      <motion.div
        className='w-full flex flex-row justify-end'
        variants={inputVariants}
      >
        <Button
          variant='next'
          className='text-[18px] font-light tracking-tight'
          size='next'
          onClick={() => {
            makeUser();
          }}
          disabled={!age || isLoading}
        >
          Next
        </Button>
      </motion.div>
    </motion.div>
  );
};

const Metrics = () => {
  const { currentPage, setCurrentPage, isLoading, setIsLoading } =
    useContext(CloudContext);

  return (
    <div className='h-[calc(100vh-94px)] w-full flex items-center justify-center'>
      {currentPage == 1 && <BodyWeight />}
      {currentPage == 2 && <Gender />}
      {currentPage == 3 && <Age />}
      {currentPage == 4 && <Welcome />}
      {currentPage == 5 && <Sleep />}
      {currentPage == 6 && <Ingredients />}

      {/* loader */}
      {isLoading && (
        <Loader2 className='absolute bottom-[20px] right-[20px] animate-spin' />
      )}
    </div>
  );
};

export default Metrics;
