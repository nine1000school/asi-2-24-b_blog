import { AppContextProvider } from "@/components/AppContext.jsx"
import "@/styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default App
