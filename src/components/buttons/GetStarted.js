"use client";

import { Button, Link } from "@chakra-ui/react";

const GetStarted = (props) => {
  const buttonStyles = {
    variant: "solid",
    size: "lg",
    bg: "white",
    color: "black",
  };

  return (
    <Link href="https://app.teachassist.ai/register" isExternal>
      <Button {...buttonStyles} {...props}>
        Get Started
      </Button>
    </Link>
  );
};

export default GetStarted;
