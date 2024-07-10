import React, { createContext, useState } from "react";

// Create a context
export const ProfileContext = createContext();

// Context provider component
export const ProfileProvider = ({ children }) => {
  const [isAdminViewVisible, setAdminViewVisible] = useState(false);
  const [grantAmount, setGrantAmount] = useState(null);
  const [circumstancesQuestion, setCircumstancesQuestion] = useState(null);
  const [additionalQuestionAnswer, setAdditionalQuestionAnswer] =
    useState(null);
  const [additionalQuestion, setAdditionalQuestion] = useState(null);
  const [grantSubmitted, setGrantSubmitted] = useState(false);
  const [grantApproved, setGrantApproved] = useState(false);
  const [showGrant, setShowGrant] = useState(false);

  return (
    <ProfileContext.Provider
      value={{
        isAdminViewVisible,
        setAdminViewVisible,
        grantAmount,
        setGrantAmount,
        circumstancesQuestion,
        setCircumstancesQuestion,
        additionalQuestion,
        setAdditionalQuestion,
        additionalQuestionAnswer,
        setAdditionalQuestionAnswer,
        grantSubmitted,
        setGrantSubmitted,
        grantApproved,
        setGrantApproved,
        showGrant,
        setShowGrant,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
