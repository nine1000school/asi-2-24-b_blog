import config from "@/config.js"
import axios from "axios"
import jsonwebtoken from "jsonwebtoken"
import { createContext, useEffect, useState } from "react"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [jwt, setJWT] = useState(null)
  const [session, setSession] = useState(null)
  const api = axios.create({
    headers: jwt
      ? {
          Authorization: `bearer ${jwt}`,
        }
      : {},
    baseURL: config.api.baseURL,
  })
  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { result: jwt },
      } = await api.post("/sign-in", { email, password })

      localStorage.setItem(config.session.localStorageItemName, jwt)

      const { payload } = jsonwebtoken.decode(jwt)

      setJWT(jwt)
      setSession(payload)

      return [null, true]
    } catch (err) {
      return ["Invalid credentials"]
    }
  }
  const signUp = async ({ firstName, lastName, email, password }) => {
    try {
      await api.post("/sign-up", {
        firstName,
        lastName,
        email,
        password,
      })

      return [null, true]
    } catch (err) {
      return ["Oops. Something went wrong."]
    }
  }
  const signOut = () => {
    setSession(false)
    localStorage.removeItem(config.session.localStorageItemName)
  }

  useEffect(() => {
    const jwt = localStorage.getItem(config.session.localStorageItemName)

    if (!jwt) {
      setSession(false)

      return
    }

    const { payload } = jsonwebtoken.decode(jwt)

    setJWT(jwt)
    setSession(payload)
  }, [])

  if (session === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <span className="animate-bounce text-4xl font-bold">Loading...</span>
      </div>
    )
  }

  return (
    <AppContext.Provider
      value={{
        api,
        state: {
          session,
        },
        actions: {
          signIn,
          signUp,
          signOut,
        },
      }}
      {...props}
    />
  )
}

export default AppContext
