
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Scroll when the pathname changes

  return null; // This component doesn't render anything, it just handles the scroll behavior

};



export default ScrollToTopOnRouteChange;