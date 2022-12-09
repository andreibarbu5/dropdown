import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Faq from "./Faq";
const Hero = () => {
  const [faq, setFaq] = useState([
    {
      question: "Is there a free trial available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni, voluptate nam harum reprehenderit tenetur omnis similique commodi quas nihil? ",
      open: false,
    },
    {
      question: " Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni, voluptate nam harum reprehenderit tenetur omnis similique commodi quas nihil? ",
      open: false,
    },
    {
      question: "Quo magni, voluptate nam harum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni, voluptate nam harum reprehenderit tenetur omnis similique commodi quas nihil? ",
      open: false,
    },
    {
      question: "Lol Is there a free trial available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni, voluptate nam harum reprehenderit tenetur omnis similique commodi quas nihil? ",
      open: false,
    },
    {
      question: "Quo magni, voluptate nam harum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni, voluptate nam harum reprehenderit tenetur omnis similique commodi quas nihil? zzzzz",
      open: false,
    },
  ]);

  const toggle = (index) => {
    setFaq(
      faq.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div className="pt-20 flex flex-col items-center max-w-[50rem] mx-auto">
      {/* Title */}

      <p className="font-bold">FAQs</p>
      <h1 className="font-medium text-[36px]">Frequently asked questions</h1>

      {/* Search */}
      <p className="text-gray-400 font-medium pt-8">
        Have questions?We're here to help.
      </p>
      <div className="border relative flex items-center py-[3px] mt-6 rounded-md">
        <input type="search" placeholder="Search" className=" pl-8 " />
        <BiSearch className="absolute left-2 text-gray-400" />
      </div>

      {/* FAQ */}
      <div className="w-full pt-16 space-y-6">
        {faq.map((faq, index, key) => (
          <Faq
            question={faq.question}
            answer={faq.answer}
            open={faq.open}
            index={index}
            key={index}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
