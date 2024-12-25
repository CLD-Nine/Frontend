import React, { useContext } from "react";
import { Plus } from "lucide-react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useRouter } from "next/router";

import "react-circular-progressbar/dist/styles.css";
import { goldPattern, btnBack, sample1 } from "@/assets";
import CloudContext from "@/context/CloudContext";
import Elements from "@/components/Elements";
import ProgressProvider from "@/lib/ProgressProvider";

const YourFormula = () => {
  const { getItemFromLocal, makeUser } = useContext(CloudContext);

  const name = getItemFromLocal("customerName");
  const router = useRouter();

  // if no name then go back to homepage

  const handleClick = async () => {
    console.log("clicked");
    try {
      const res = await fetch("http://13.59.194.186:80/cld9aiv2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive",
        },
        body: JSON.stringify({
          user_input: "ready",
          user_id:
            "2c04672d9b03d139a1489077e80b5398660b7af5a5b86077426ddb2bd3aa0461",
        }),
      });

      if (res.ok) {
        const resText = await res.json();
        console.log(resText);
        // console.log(resText.data.slice(12, 34)); //Please enter your age
      } else {
        console.log("Something went wrong");
        // console.log("user_input: ", text);
        // console.log("user_id", );
      }
    } catch (error) {
      console.log("cld-9-subscription error, ", error);
    }
  };

  return (
    <div className='h-[calc(100vh-94px)] w-full px-[25px] flex items-center justify-center'>
      <div className='w-[85%] h-full'>
        <button onClick={handleClick}>call ai</button>

        {/* name & checkout btn */}
        <div className='flex flex-row items-center justify-between'>
          <p
            style={{
              backgroundImage: `url(${goldPattern.src})`,
              backgroundSize: "200%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            className='text-[48px] font-medium tracking-tight'
          >
            {name || " "}'s formula.
          </p>

          {/* checkout btn */}
          <button
            className='px-[23px] py-[10px] bg-red-400 text-[20px] tracking-tight font-light text-white rounded-[16px] hover:shadow-lg transition-all duration-200 ease-in-out'
            style={{
              backgroundImage: `url(${btnBack.src})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundClip: "border-box",
              WebkitBackgroundClip: "border-box",
              WebkitTextFillColor: "white",
            }}
            disabled={!name}
            onClick={() => {
              makeUser();
              router.push("/product/checkout");
            }}
          >
            Checkout &rarr;
          </button>
        </div>

        {/* overview */}
        <div className='mt-[24px] flex flex-row gap-[10px]'>
          <Elements type='overview' text='Overview' />
          <Elements text='Caffeine Anhydrous' />
          <Elements text='Caffeine Anhydrous' />

          <div className='bg-[#e0e0e0] p-[5px] rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out'>
            <Plus color='#817F7F' size={35} />
          </div>
        </div>

        {/* 2 information blocks */}
        <div className='mt-[20px] flex flex-row gap-[20px]'>
          <div className='flex-[1.5] p-[10px] rounded-[30px] h-[600px] relative bg-red-800'>
            {/* <Image
              src={sample1}
              className='absolute h-[600px] w-full top-0 left-0 -z-10'
            /> */}

            {/* name */}
            <div className='w-full bg-white flex flex-row items-center px-[20px] py-[10px] rounded-[20px] gap-[20px]'>
              <p className='text-[48px] text-[#7e7e7e] font-normal tracking-tight'>
                Cordyceps Extract.
              </p>

              <div className='flex-[1] bg-[#E6E6E6] text-[24px] text-[#9B9B9B] py-[14px] text-center rounded-[20px] font-light'>
                2000 mg
              </div>
            </div>

            {/* description */}
            <div className='text-white text-[32px] tracking-tight text-wrap leading-[40px] font-light mt-[10px] px-[10px]'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                iure laboriosam, officiis consequuntur qui sit, dignissimos
                nihil odio iusto repellat exercitationem, neque necessitatibus!
                Dolor minima, rerum est libero aspernatur aliquam.
              </p>
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-[20px]'>
            <div className='flex-1 bg-[#ebebeb] rounded-[20px] p-[20px]'>
              <div className='bg-white text-[#646464] py-[10px] px-[20px] text-[20px] tracking-tight font-light rounded-[14px]'>
                Ingredient Sourcing Info
              </div>
              <div className='text-[20px] text-black font-light tracking-tight mt-[10px]'>
                Purity: 50%
                <br />
                Heavy Metals: Absent
                <br />
                Scientific Name: Cordyceps Sinesis
                <br />
                Sourcing Certifications: NSF, Kosher, USDA, CGMP
              </div>
            </div>

            <div className='flex-[2] bg-black rounded-[20px] flex items-center justify-center'>
              <div className='w-[300px] h-[300px] relative'>
                <ProgressProvider valueStart={0} valueEnd={34}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      text={`${value}%`}
                      styles={buildStyles({
                        textSize: "14px",
                        textColor: "#fff",
                        trailColor: "#fff",
                        pathColor: "#838383",
                      })}
                    />
                  )}
                </ProgressProvider>
                <p className='absolute text-[#838383] top-[180px] left-[75px] text-[16px]'>
                  Compatibility Score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourFormula;
