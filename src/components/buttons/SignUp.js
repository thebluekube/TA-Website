"use client";

import { Button } from "@chakra-ui/react";

const SignUp= (props) => {
  const buttonStyles = {
    variant: "solid",
    size: "lg",
    bg: "black",
    color: "white",
    borderRadius: "8px",
    
  };

  return (
    <Button {...buttonStyles} {...props}>
      SignUp
    </Button>
  );
};

export default SignUp;