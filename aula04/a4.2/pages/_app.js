export default function App({ Component, pageProps }) {
  return (
    <>
      {/** Glogal configurations */}
      <style>{`
        * {
          font-family: sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
