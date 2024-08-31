import { Button, ChakraProvider } from "@chakra-ui/react";
import type { Config } from "@measured/puck";

type Props = {
  ChakraButton: { text: string };
  HeadingBlock: { title: string };
};

export const config: Config<Props> = {
  root: {
    render: ({ children }) => {
      return <ChakraProvider>{children}</ChakraProvider>;
    },
  },
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    ChakraButton: {
      fields: {
        text: { type: "text" },
      },
      defaultProps: {
        text: "Button",
      },
      render: ({ text }) => <Button colorScheme={"teal"}>{text}</Button>,
    },
  },
};

export default config;
