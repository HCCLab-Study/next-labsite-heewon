import { useState, useEffect } from "react";

function useDetectWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // 브라우저 창 크기가 변경될 때마다 이벤트를 수신하여 windowWidth 상태를 업데이트
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

export default useDetectWindowWidth;
