import React, { createContext, useContext, useState } from "react";

const FaqContext = createContext(false);

export const FaqProvider = ({ children }) => {
  const [faqOpen, setFaqOpen] = useState(false);

  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };

  return (
    <FaqContext.Provider value={{ faqOpen, toggleFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaq = () => {
  return useContext(FaqContext);
};
