import { useContext } from "react"
import { passContext } from "../context/passContextContext"

export const usePass = () => {
    const context = useContext(passContext)
  
    if (context === undefined) {
      throw new Error("useTheme() must be used inside a ThemeProvider")
    }
  
    return context
  }