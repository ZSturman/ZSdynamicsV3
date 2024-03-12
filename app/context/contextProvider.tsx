"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export const sheetSections = ["about", "experience", "lab", "contact"] as const

export type SelectedContentType = typeof sheetSections[number];

interface PortfolioContextType {
  justTheHighlights: boolean;
  setJustTheHighlights: (value: boolean) => void;
  selectedContent: SelectedContentType;
  setSelectedContent: (value: SelectedContentType) => void;
}

// This default value setup might not be necessary if you're always providing the values through the provider
const defaultPortfolioContextValue: PortfolioContextType = {
  justTheHighlights: false,
  setJustTheHighlights: () => {},
  selectedContent: "contact",
  setSelectedContent: () => {},
};

const PortfolioContext = createContext<PortfolioContextType>(
  defaultPortfolioContextValue
);

export function usePortfolio() {
  return useContext(PortfolioContext);
}

interface Props {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<Props> = ({ children }) => {
  const [justTheHighlights, setJustTheHighlights] = useState<boolean>(
    defaultPortfolioContextValue.justTheHighlights
  );
  const [selectedContent, setSelectedContent] = useState<SelectedContentType>(
    defaultPortfolioContextValue.selectedContent
  );
  


  const value: PortfolioContextType = {
    justTheHighlights,
    setJustTheHighlights,
    selectedContent,
    setSelectedContent,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
