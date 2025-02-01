import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  delay,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-400, 0, 400], [2, 1, 0.1]);
  //   useEffect(() => {
  //     x.onChange(() => console.log(x.get()));
  //     scale.onChange(() => console.log(scale.get()));
  //   }, [x]);
  useMotionValueEvent(scale, "change", (l) => console.log(l));
  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
