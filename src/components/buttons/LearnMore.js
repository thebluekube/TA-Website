"use client";

import { Button } from "@chakra-ui/react";

const LearnMore = (props) => (
  <Button
    colorScheme="white"
    size="lg"
    variant="outline"
    color="white"
    bg="rgba(255, 255, 255, 0.25)"
    {...props}
  >
    Learn More
  </Button>
);

export default LearnMore;
