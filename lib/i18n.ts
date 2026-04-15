"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  es: {
    translation: {
      common: {
        locale: "es-MX",
      },
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        services: "Servicios",
        experience: "Experiencia",
        contact: "Contacto",
        contactCta: "Contáctame",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        switchTo: "Switch to English",
        switchLabel: "EN",
      },
      hero: {
        badge: "Perfil Híbrido: Intérprete y Biotecnóloga Genómica",
        subtitle: "Comunicación bilingüe aplicada a ciencia, salud y educación",
        description:
          "Licenciada en Biotecnología Genómica con experiencia en laboratorio clínico y molecular, combinada con formación avanzada en inglés e interpretación bilingüe para contextos técnicos, académicos y de atención a usuarios.",
        languageSpanish: "Español",
        languageSpanishLevel: "Lengua materna",
        languageEnglish: "English",
        languageEnglishLevel: "Avanzado / Cambridge",
        contactButton: "Contáctame",
        servicesButton: "Ver Servicios",
        imageAlt: "Katherin América Salcedo Beltrán - Perfil híbrido profesional",
        scrollDown: "Desplazarse hacia abajo",
      },
      about: {
        subtitle: "Sobre Mí",
        title: "Ciencia aplicada y comunicación bilingüe efectiva",
        paragraph1:
          "Soy Katherin América Salcedo Beltrán, Licenciada en Biotecnología Genómica (UAS, 2020-2025), enfocada en integrar conocimiento científico, experiencia operativa de laboratorio y habilidades de comunicación bilingüe en inglés y español.",
        paragraph2:
          "He participado en análisis molecular, extracción de ADN, PCR, preparación de reactivos, procesamiento de muestras y apoyo en laboratorio clínico y biomédico. También he colaborado en aula como maestra de apoyo, reforzando mi perfil de comunicación técnica y acompañamiento humano.",
        paragraph3:
          "Mi objetivo es aportar en equipos de investigación y desarrollo con visión innovadora, facilitando tanto la ejecución técnica como la interpretación y explicación de información especializada para diferentes audiencias.",
        summaryTitle: "Resumen profesional",
        summaryDescription:
          "Biotecnóloga Genómica con experiencia en laboratorio y capacidad para comunicar procesos técnicos con precisión. Busco integrarme a equipos dinámicos de investigación, diagnóstico e innovación.",
        keyDataTitle: "Datos clave",
        stats: {
          labs: "Años en laboratorios",
          research: "Proyectos de investigación",
          certs: "Certificaciones recientes",
          langs: "Idiomas de trabajo",
        },
        strengths: {
          technicalTitle: "Experiencia técnica",
          technicalDescription:
            "Procesos de biología molecular, análisis clínico y trabajo bajo protocolo.",
          bilingualTitle: "Comunicación bilingüe",
          bilingualDescription:
            "Interpretación y explicación de contenido especializado en español e inglés.",
          academicTitle: "Formación académica",
          academicDescription:
            "Licenciatura en Biotecnología Genómica con actualización continua certificada.",
          professionalTitle: "Compromiso profesional",
          professionalDescription:
            "Rigor técnico, confidencialidad y enfoque colaborativo en cada proyecto.",
        },
      },
      services: {
        subtitle: "Servicios",
        title: "Soluciones híbridas para comunicación y ciencia aplicada",
        intro:
          "Cada servicio se adapta al contexto del proyecto: laboratorio, investigación, aula o colaboración profesional. El enfoque combina precisión técnica, claridad lingüística y cumplimiento de tiempos.",
        sectorsTitle: "Sectores donde puedo aportar",
        deliverablesTitle: "Tipo de entregables",
        sectors: {
          clinical: "Diagnóstico clínico",
          molecular: "Biología molecular",
          education: "Educación",
          care: "Atención al paciente",
        },
        deliverables: {
          reports: "Reportes y traducciones técnicas",
          presentations: "Apoyo en presentaciones",
          interviews: "Acompañamiento en entrevistas",
          communication: "Soporte de comunicación bilingüe",
        },
        cards: {
          technicalInterpretation: {
            title: "Interpretación Bilingüe Técnica",
            description:
              "Interpretación español-inglés para contextos académicos, científicos y de salud con enfoque en claridad terminológica.",
            p1: "Terminología biomédica y técnica",
            p2: "Sesiones presenciales y virtuales",
            p3: "Adaptación al nivel de la audiencia",
          },
          meetings: {
            title: "Acompañamiento en Reuniones y Entrevistas",
            description:
              "Soporte en conversaciones profesionales, sesiones de asesoría y procesos de selección con comunicación bilingüe precisa.",
            p1: "Entrevistas académicas o laborales",
            p2: "Mediación comunicativa profesional",
            p3: "Preparación previa de contexto",
          },
          remote: {
            title: "Soporte Remoto",
            description:
              "Atención virtual para interpretación, revisión de materiales y preparación de presentaciones técnicas.",
            p1: "Asesoría por videollamada",
            p2: "Revisión de diapositivas y guiones",
            p3: "Acompañamiento por etapas",
          },
          translation: {
            title: "Traducción y Revisión de Documentos",
            description:
              "Traducción de contenido técnico, académico y biomédico con consistencia terminológica y redacción clara.",
            p1: "Informes y protocolos",
            p2: "Documentos académicos",
            p3: "Control de estilo y terminología",
          },
          rnd: {
            title: "Apoyo a Proyectos de I+D",
            description:
              "Colaboración en organización de actividades de investigación, documentación y comunicación de resultados.",
            p1: "Gestión y orden de evidencia",
            p2: "Redacción de resultados",
            p3: "Comunicación de avances",
          },
          lab: {
            title: "Asistencia en Procesos de Laboratorio",
            description:
              "Experiencia en prácticas de biología molecular y laboratorio clínico: PCR, reactivos, muestras y protocolos.",
            p1: "Preparación de reactivos y geles",
            p2: "Procesamiento de muestras",
            p3: "Buenas prácticas y bioseguridad",
          },
        },
      },
      experience: {
        subtitle: "Experiencia",
        title: "Trayectoria profesional",
        certificationsSubtitle: "Certificaciones",
        certificationsTitle: "Formación y actualización",
        profileComplementary: "Perfil complementario",
        items: {
          i1Title: "Pasante de Servicio Social",
          i1Company: "Laboratorio de Biología Molecular y Fitopatología, UAS",
          i1Description:
            "Análisis de material vegetal y suelo, extracción de ADN, preparación de reactivos, oligos para PCR, geles de agarosa, electroforesis, manejo de autoclave y equipo de laboratorio.",
          i2Title: "Auxiliar en Laboratorio Clínico y Biomédico",
          i2Company: "Universidad Autónoma de Sinaloa, campus Culiacán",
          i2Description:
            "Organización, gestión y análisis de muestras biológicas aplicando técnicas de procesamiento en entornos de laboratorio clínico.",
          i3Title: "Experiencia en Biología Molecular",
          i3Company: "Centro Nacional de Referencia de Salud Digna",
          i3Description:
            "Procesamiento de ANA, PCR SARS-CoV, PCR VPH, pruebas de alérgenos y detección de Treponema pallidum.",
          i4Title: "Maestra de Apoyo en Aula",
          i4Company: "Colegio Sinaloa, campus Horizontes",
          i4Description:
            "Apoyo en actividades de aula y maestra sombra, fortaleciendo habilidades de comunicación y acompañamiento educativo.",
          i5Title: "Interpretación Bilingüe ES-EN",
          i5Company: "Ámbito académico y técnico",
          i5Description:
            "Aplicación de inglés avanzado para comunicar contenido científico y facilitar interacción entre equipos o audiencias con distintos niveles de dominio del idioma.",
        },
        certifications: {
          c1: "Diagnóstico de parásitos de importancia clínica (abril 2025)",
          c2: "Evaluación de ab anti-Treponema pallidum por inmunofluorescencia indirecta (marzo 2025)",
          c3: "Actualización en interpretación y clasificación de patrones de ANA (mayo 2025)",
          c4: "Conocimientos de cobas infinity ROCHE (agosto 2025)",
          c5: "Curso de manejo de RPBI (julio 2025)",
          c6: "Señalamientos de seguridad laboral, medio ambiente y protección civil (agosto 2025)",
          c7: "Orden y limpieza en áreas laborales y de servicio (agosto 2025)",
          c8: "Comisión de seguridad e higiene (agosto 2025)",
          c9: "Inglés avanzado con certificaciones Cambridge (2010-2017)",
        },
      },
      contact: {
        subtitle: "Contacto",
        title: "Hablemos de tu proyecto o vacante",
        phone: "Teléfono",
        email: "Email",
        location: "Ubicación",
        availability: "Disponibilidad",
        availabilityValue: "Lun - Vie, 8:00 - 18:00",
        ctaTitle: "¿Listo para comenzar?",
        ctaDescription:
          "Estoy disponible para colaborar en áreas de laboratorio, investigación, soporte técnico-científico e interpretación bilingüe en contextos académicos y profesionales.",
        emailButton: "Enviar correo",
        benefits: {
          b1: "Respuesta en menos de 24 horas",
          b2: "Perfil híbrido: ciencia + comunicación bilingüe",
          b3: "Apoyo en proyectos académicos y técnicos",
          b4: "Confidencialidad y enfoque profesional",
        },
      },
      footer: {
        role: "Intérprete Bilingüe y Biotecnóloga Genómica",
        rights: "Todos los derechos reservados.",
      },
    },
  },
  en: {
    translation: {
      common: {
        locale: "en-US",
      },
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        experience: "Experience",
        contact: "Contact",
        contactCta: "Contact Me",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        switchTo: "Cambiar a español",
        switchLabel: "ES",
      },
      hero: {
        badge: "Hybrid Profile: Interpreter and Genomic Biotechnologist",
        subtitle: "Bilingual communication applied to science, healthcare, and education",
        description:
          "Genomic Biotechnology graduate with experience in clinical and molecular laboratories, combined with advanced English training and bilingual interpretation for technical, academic, and user-facing contexts.",
        languageSpanish: "Spanish",
        languageSpanishLevel: "Native language",
        languageEnglish: "English",
        languageEnglishLevel: "Advanced / Cambridge",
        contactButton: "Contact Me",
        servicesButton: "View Services",
        imageAlt: "Katherin America Salcedo Beltran - Hybrid professional profile",
        scrollDown: "Scroll down",
      },
      about: {
        subtitle: "About",
        title: "Applied science and effective bilingual communication",
        paragraph1:
          "I am Katherin America Salcedo Beltran, a Genomic Biotechnology graduate (UAS, 2020-2025), focused on integrating scientific knowledge, laboratory operations experience, and bilingual communication skills in English and Spanish.",
        paragraph2:
          "I have worked on molecular analysis, DNA extraction, PCR, reagent preparation, sample processing, and support in clinical and biomedical laboratories. I have also worked as a classroom support teacher, strengthening my technical communication and human-centered guidance profile.",
        paragraph3:
          "My goal is to contribute to innovative research and development teams by supporting both technical execution and clear interpretation of specialized information for diverse audiences.",
        summaryTitle: "Professional summary",
        summaryDescription:
          "Genomic Biotechnologist with laboratory experience and the ability to communicate technical processes with precision. I am seeking to join dynamic teams in research, diagnostics, and innovation.",
        keyDataTitle: "Key data",
        stats: {
          labs: "Years in laboratories",
          research: "Research projects",
          certs: "Recent certifications",
          langs: "Working languages",
        },
        strengths: {
          technicalTitle: "Technical experience",
          technicalDescription:
            "Molecular biology processes, clinical analysis, and protocol-based work.",
          bilingualTitle: "Bilingual communication",
          bilingualDescription:
            "Interpretation and explanation of specialized content in Spanish and English.",
          academicTitle: "Academic background",
          academicDescription:
            "Degree in Genomic Biotechnology with ongoing certified training.",
          professionalTitle: "Professional commitment",
          professionalDescription:
            "Technical rigor, confidentiality, and a collaborative approach in every project.",
        },
      },
      services: {
        subtitle: "Services",
        title: "Hybrid solutions for communication and applied science",
        intro:
          "Each service is adapted to the project context: laboratory, research, classroom, or professional collaboration. The approach combines technical precision, linguistic clarity, and timely delivery.",
        sectorsTitle: "Sectors where I can contribute",
        deliverablesTitle: "Types of deliverables",
        sectors: {
          clinical: "Clinical diagnostics",
          molecular: "Molecular biology",
          education: "Education",
          care: "Patient care",
        },
        deliverables: {
          reports: "Technical reports and translations",
          presentations: "Presentation support",
          interviews: "Interview support",
          communication: "Bilingual communication support",
        },
        cards: {
          technicalInterpretation: {
            title: "Technical Bilingual Interpretation",
            description:
              "Spanish-English interpretation for academic, scientific, and healthcare settings focused on terminological clarity.",
            p1: "Biomedical and technical terminology",
            p2: "On-site and remote sessions",
            p3: "Audience-level adaptation",
          },
          meetings: {
            title: "Meetings and Interview Support",
            description:
              "Support in professional conversations, advisory sessions, and selection processes with precise bilingual communication.",
            p1: "Academic or work interviews",
            p2: "Professional communication mediation",
            p3: "Context preparation beforehand",
          },
          remote: {
            title: "Remote Support",
            description:
              "Virtual support for interpretation, material review, and preparation of technical presentations.",
            p1: "Video-call advisory",
            p2: "Slides and script review",
            p3: "Stage-by-stage support",
          },
          translation: {
            title: "Document Translation and Review",
            description:
              "Translation of technical, academic, and biomedical content with consistent terminology and clear writing.",
            p1: "Reports and protocols",
            p2: "Academic documents",
            p3: "Style and terminology control",
          },
          rnd: {
            title: "R&D Project Support",
            description:
              "Collaboration in organizing research activities, documentation, and communication of results.",
            p1: "Evidence management and organization",
            p2: "Results drafting",
            p3: "Progress communication",
          },
          lab: {
            title: "Laboratory Process Assistance",
            description:
              "Experience in molecular biology and clinical laboratory practices: PCR, reagents, samples, and protocols.",
            p1: "Reagent and gel preparation",
            p2: "Sample processing",
            p3: "Good practices and biosafety",
          },
        },
      },
      experience: {
        subtitle: "Experience",
        title: "Professional trajectory",
        certificationsSubtitle: "Certifications",
        certificationsTitle: "Training and updates",
        profileComplementary: "Complementary profile",
        items: {
          i1Title: "Social Service Intern",
          i1Company: "Molecular Biology and Phytopathology Laboratory, UAS",
          i1Description:
            "Plant and soil material analysis, DNA extraction, reagent preparation, PCR oligos, agarose gels, electrophoresis, autoclave handling, and laboratory equipment operation.",
          i2Title: "Clinical and Biomedical Laboratory Assistant",
          i2Company: "Autonomous University of Sinaloa, Culiacan campus",
          i2Description:
            "Organization, management, and analysis of biological samples using laboratory processing techniques.",
          i3Title: "Molecular Biology Experience",
          i3Company: "National Reference Center, Salud Digna",
          i3Description:
            "ANA processing, SARS-CoV PCR, HPV PCR, allergen testing, and Treponema pallidum detection.",
          i4Title: "Classroom Support Teacher",
          i4Company: "Colegio Sinaloa, Horizontes campus",
          i4Description:
            "Classroom activity support and shadow teaching, strengthening communication and educational support skills.",
          i5Title: "ES-EN Bilingual Interpretation",
          i5Company: "Academic and technical environment",
          i5Description:
            "Use of advanced English to communicate scientific content and facilitate interaction among teams or audiences with different language proficiency levels.",
        },
        certifications: {
          c1: "Clinical parasite diagnostics (April 2025)",
          c2: "Anti-Treponema pallidum antibody evaluation by indirect immunofluorescence (March 2025)",
          c3: "Update on ANA pattern interpretation and classification strategies (May 2025)",
          c4: "Cobas infinity ROCHE knowledge (August 2025)",
          c5: "RPBI handling course (July 2025)",
          c6: "Work safety, environment, and civil protection signage (August 2025)",
          c7: "Workplace and service area order and cleanliness (August 2025)",
          c8: "Safety and hygiene committee (August 2025)",
          c9: "Advanced English with Cambridge certifications (2010-2017)",
        },
      },
      contact: {
        subtitle: "Contact",
        title: "Let us talk about your project or opening",
        phone: "Phone",
        email: "Email",
        location: "Location",
        availability: "Availability",
        availabilityValue: "Mon - Fri, 8:00 - 18:00",
        ctaTitle: "Ready to get started?",
        ctaDescription:
          "I am available to collaborate in laboratory, research, technical-scientific support, and bilingual interpretation in academic and professional contexts.",
        emailButton: "Send email",
        benefits: {
          b1: "Response within 24 hours",
          b2: "Hybrid profile: science + bilingual communication",
          b3: "Support for academic and technical projects",
          b4: "Confidentiality and professional approach",
        },
      },
      footer: {
        role: "Bilingual Interpreter and Genomic Biotechnologist",
        rights: "All rights reserved.",
      },
    },
  },
}

if (!i18n.isInitialized) {
  const savedLanguage =
    typeof window !== "undefined" ? window.localStorage.getItem("site-language") : null

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage ?? "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  })
}

export default i18n
