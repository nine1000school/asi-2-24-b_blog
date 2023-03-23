import config from "@/config.js"
import axios from "axios"
import jsonwebtoken from "jsonwebtoken"
import { createContext, useEffect, useState } from "react"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [session, setSession] = useState(null)
  const api = axios.create({
    baseURL: config.api.baseURL,
  })
  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { result: jwt },
      } = await api.post("/sign-in", { email, password })

      localStorage.setItem(config.session.localStorageItemName, jwt)

      const { payload } = jsonwebtoken.decode(jwt)

      setSession(payload)

      return [null, true]
    } catch (err) {
      return [{ error: "Invalid credentials" }]
    }
  }
  const signOut = () => {
    setSession(false)
    localStorage.removeItem(config.session.localStorageItemName)
  }

  useEffect(() => {
    const jwt = localStorage.getItem(config.session.localStorageItemName)

    const { payload } = jsonwebtoken.decode(jwt)

    setSession(payload)
  }, [])

  return (
    <AppContext.Provider
      value={{
        api,
        state: {
          session,
        },
        actions: {
          signIn,
          signOut,
        },
      }}
      {...props}
    />
  )
}

export default AppContext
