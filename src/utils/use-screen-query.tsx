import { useEffect, useState, useRef } from 'react';

interface IUseScreenQueryReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function useScreenQuery(): IUseScreenQueryReturn {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkWindowSize = (eventWindow: Window) => {
      const width = eventWindow.innerWidth;

      if (width > 1440) {
        setIsDesktop(true);
        setIsTablet(false);
        setIsMobile(false);
      } else if (width < 1440 && width > 500) {
        setIsDesktop(false);
        setIsTablet(true);
        setIsMobile(false);
      } else if (width <= 500) {
        setIsDesktop(false);
        setIsTablet(false);
        setIsMobile(true);
      }
    };

    const timeoutFunction = (e: UIEvent) => {
      if (timeout.current) clearTimeout(timeout.current);

      timeout.current = setTimeout(
        () => checkWindowSize(e.target as Window),
        500
      );
    };

    window.addEventListener('resize', timeoutFunction);

    // need to check on mount as well;
    checkWindowSize(window);

    return () => timeout.current && clearTimeout(timeout.current);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export default useScreenQuery;
