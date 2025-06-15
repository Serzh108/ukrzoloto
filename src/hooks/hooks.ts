import { useEffect, useState } from "react";

export const useCheckDeviceType = () => {
  const [width, setWidth] = useState<number | false>(
    typeof window !== 'undefined' && window.innerWidth,
  );

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width && width <= 560;
  const isLaptop = width && width > 560 && width <= 1024;
  const isFullHD = width && width >= 1920;

  return { isMobile, isLaptop, isFullHD };
};

export default useCheckDeviceType;