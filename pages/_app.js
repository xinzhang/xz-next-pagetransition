import '../styles/globals.css';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
