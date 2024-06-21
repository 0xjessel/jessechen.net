import { Box } from "@chakra-ui/react";
import NImage from "next/image";

export default function HeroImage() {
  return (
    <Box
      mb={8}
      borderRadius="4"
      overflow="hidden"
      boxShadow="lg"
      css={{
        "& span": { display: "block !important" },
      }}
    >
      <NImage
        width="638"
        height="420"
        layout="intrinsic"
        src={`image/upload/f_auto,c_fill,w_638,dpr_${window.devicePixelRatio}/v1688964717/hero.png`}
        alt="image of Dhinesh"
      />
    </Box>
  );
}
