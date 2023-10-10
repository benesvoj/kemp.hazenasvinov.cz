import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const GoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <TopToBtm>
      {" "}
      {showTopBtn && (
        <Button onClick={GoToTop}>
          <Arrow className="arrow"></Arrow>
        </Button>
      )}{" "}
    </TopToBtm>
  );
};

const TopToBtm = styled.div`
  position: relative;
`;

const Arrow = styled.div`
  border: solid;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: ${(props) => props.theme.color.secondary};
  cursor: pointer;
  animation: move-btn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  position: fixed;
  bottom: 40px;
  left: 50%;
  z-index: 15;
  &:hover {
    animation: none;
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
  }
  @keyframes move-btn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
