"use client"

import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    const applyDocumentLanguage = (language: string) => {
      document.documentElement.lang = language
    }

    applyDocumentLanguage(i18n.language)

    const handleLanguageChanged = (language: string) => {
      applyDocumentLanguage(language)
      window.localStorage.setItem("site-language", language)
    }

    i18n.on("languageChanged", handleLanguageChanged)

    return () => {
      i18n.off("languageChanged", handleLanguageChanged)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
