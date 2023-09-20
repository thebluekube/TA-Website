"use client";

import { Button } from "@chakra-ui/react";

const GetStarted = (props) => {
  const buttonStyles = {
    variant: "solid",
    size: "lg",
    bg: "white",
    color: "black",
  };

  return (
    <Button {...buttonStyles} {...props}>
      Get Started
    </Button>
  );
};

export default GetStarted;
