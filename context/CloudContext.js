import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { nanoid } from "nanoid";

const CloudContext = createContext();

export const CloudProvider = ({ children }) => {
  const [notSureModal, setNotSureModal] = useState(false);
  const [boxName, setBoxName] = useState("Your Name");
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(null);

  // api handling
  const [apiResponse, setApiResponse] = useState("");
  const [apiReplyUser, setApiReplyUser] = useState("");

  // loading
  const [isLoading, setIsLoading] = useState(false);

  // metrics
  //TODO: store in localDB
  const [name, setName] = useState(null);
  const [bodyWeight, setBodyWeight] = useState();
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();

  const router = useRouter();

  const getItemFromLocal = (name) => {
    if (localStorage.getItem(name)) return localStorage.getItem(name);
    else {
      alert("No customer found");
      router.push("/product/cld-9-subscription");
    }
  };

  useEffect(() => {
    const fetchedName = getItemFromLocal("customerName");
    setName(fetchedName);
  }, []); // Fetch only on the client after mount

  if (name === null) return <div>Loading...</div>;

  // MAKE USER
  const makeUser = async () => {
    const data = {
      name: name,
      email: nanoid(),
      referral: null,
      age: age,
      sex: gender,
      weight: bodyWeight,
    };

    try {
      setIsLoading(true);
      const res = await fetch("http://13.59.194.186:80/signupv2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        console.log("signup success"); // TODO: Toast

        const responseData = await res.json();
        const resUserId = responseData.user_id;

        setUserId(resUserId);

        document.cookie = `user_id=${userId}; expires=${new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toUTCString()}; path=/`;
      } else {
        console.log("signup failed");
      }
      setIsLoading(false);
    } catch (error) {
      console.log("makeuser error: ", error);
      setIsLoading(false);
    }
  };

  return (
    <CloudContext.Provider
      value={{
        notSureModal,
        setNotSureModal,
        boxName,
        setBoxName,
        currentPage,
        setCurrentPage,
        getItemFromLocal,
        gender,
        setGender,
        bodyWeight,
        setBodyWeight,
        age,
        setAge,
        makeUser,
        userId,
        setUserId,
        isLoading,
        setIsLoading,
        apiResponse,
        setApiResponse,
        apiReplyUser,
        setApiReplyUser,
      }}
    >
      {children}
    </CloudContext.Provider>
  );
};

export default CloudContext;
