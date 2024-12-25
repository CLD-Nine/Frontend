import React, { useContext } from "react";

import CloudContext from "@/context/CloudContext";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const QuestionBtns = ({ text }) => {
  const handleClick = async () => {
    try {
      const res = await fetch("http://13.59.194.186:80/cld9aiv2", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          user_input: text,
          user_id:
            "938df7bba6f17abb3a308636233fa59bfa4670d2f781a7de29cf93d536aeede0", //hashed id here
        }),
      });

      if (res.ok) {
        const resText = await res.json();
        console.log(resText.data.cld9ai);
        // console.log(resText.data.slice(12, 34)); //Please enter your age
      } else {
        console.log("Something went wrong");
        console.log("user_input: ", text);
        // console.log("user_id", );
      }
    } catch (error) {
      console.log("cld-9-subscription error, ", error);
    }
  };

  return (
    <Button
      variant='outline'
      className='bg-[#F9F9F9] hover:bg-[#ebebeb]'
      onClick={() => handleClick()}
    >
      {text}
    </Button>
  );
};

const Subscription = () => {
  const { notSureModal, setNotSureModal } = useContext(CloudContext);

  return (
    <>
      <div>
        {/* MIDDLE TEXT */}
        <div className='flex justify-center items-start flex-col gap-[20px] px-[150px] h-[calc(100vh-80px)] mt-auto pb-[80px]'>
          <h1 className='text-[40px] z-30'>
            Let's get started. Type in either your{" "}
            <span className='text-[#00C0D6]'>health goals, issues,</span> or{" "}
            <span className='text-[#00C0D6]'>both</span>
            <span className='text-[#FF9D00]'>.</span>
          </h1>

          {notSureModal === false ? (
            <div>
              <Button
                className='z-30 rounded-xl px-[100px] py-[22px] hover:bg-[#ff9d00] hover:text-black'
                onClick={() => setNotSureModal(true)}
              >
                Not sure where to start?
              </Button>
            </div>
          ) : (
            <>
              <div className='h-fit w-[92%] bg-[#C2C2C2] p-[20px] rounded-lg flex flex-wrap justify-between items-center gap-[20px]'>
                <QuestionBtns text='I have specific ingredients in mind' />
                <QuestionBtns text='I want to gain more muscle' />
                <QuestionBtns text='I want better longevity' />
                <QuestionBtns text="I'm looking for testosterone support" />
                <QuestionBtns text="I'm looking to lose weight" />
                <QuestionBtns text='I want better performance in my sport' />
                <QuestionBtns text="I'm having issues with focus" />
                <QuestionBtns text="I'm looking to gain weight" />
              </div>
            </>
          )}
        </div>

        {/* INPUT BOX */}
        <div className='absolute bottom-0 left-0 right-0 m-auto p-[20px] px-[150px]'>
          <div className='flex w-full justify-center items-center space-x-2'>
            <Input
              type='email'
              placeholder='Write your question or answer here'
              work='subscription'
            />
            <Button
              type='submit'
              variant='subscription'
              className='py-[26px] rounded-[10px] text-sm'
            >
              Message &rarr;
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
