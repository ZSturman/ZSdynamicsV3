/* // utils/analytics.js
import ReactGA from 'react-ga';

export const initGA = () => {  
  ReactGA.initialize('G-Z3ZJYGM3EM'); 
}

export const logPageView = () => {  
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
} */