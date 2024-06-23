'use client';
import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchActive, setSearchActive] = useState(false);
  return <SearchContext.Provider value={{ searchActive, setSearchActive }}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
