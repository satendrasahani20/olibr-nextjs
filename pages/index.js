import dynamic from "next/dynamic";
import Wrapper from "../layout/Wrapper";
import Home from "./home/home";

const index = () => {
  return (
    <>
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
