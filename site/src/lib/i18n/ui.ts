import type { Locale } from "./config";

export const ui = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    cta: {
      call: "Call",
      contact: "Contact",
      text: "Text",
    },
    lang: {
      bannerEn: "¿Prefiere español?",
      bannerEs: "Prefer English?",
      yesToSpanish: "Sí",
      yesToEnglish: "Yes",
      dismiss: "No thanks",
      toggle: "Language",
    },
    trust: {
      years: "Years in Wet Utilities",
      bilingual: "Bilingual EN / ES",
      based: "Based in Newnan, GA",
      subcontractor: "Utility Subcontractor",
    },
    about: {
      title: "About Tino",
      p1: "Tino Gutierrez has 25 years of experience in underground wet utility work across west Georgia and metro Atlanta.",
      p2: "He spent 19 years as an equipment operator with Brent, one of the region's largest utility contractors, working on sanitary sewer, storm, and water systems. He then spent 6 years as a foreman, leading field crews on commercial and municipal sites.",
      p3: "He formed TGR Utility Subcontractor LLC to subcontract wet utility installation and repair for general contractors.",
      p4: "A Hispanic, family-oriented father of four, Tino brings the same dedication to every job site. He speaks English and Spanish fluently — clear communication with crews, superintendents, and GCs.",
    },
    home: {
      heroTitle: "Serving General Contractors in West Georgia",
      heroSubtitle:
        "25 years installing and repairing sanitary sewer, storm drainage, and water lines on commercial and municipal sites.",
      projectsTitle: "Project Portfolio",
      projectsNote:
        "Recent underground wet utility work across metro Atlanta and north Georgia.",
      ctaTitle: "Get in Touch",
      ctaSubtitle: "Call, text, or send a message about your job scope, location, and timeline.",
    },
    contact: {
      title: "Contact Tino",
      subtitle: "Tell me about the job — scope, location, and timeline.",
      name: "Your Name",
      company: "Company / GC Name",
      email: "Email",
      phone: "Phone",
      message: "Job Scope & Details",
      submit: "Send Message",
      success: "Message sent — I'll get back to you soon.",
      error: "Something went wrong. Please call or text directly.",
    },
    footer: {
      serviceArea: "Service Area",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
    },
    cta: {
      call: "Llamar",
      contact: "Contacto",
      text: "Texto",
    },
    lang: {
      bannerEn: "¿Prefiere español?",
      bannerEs: "Prefer English?",
      yesToSpanish: "Sí",
      yesToEnglish: "Yes",
      dismiss: "No, gracias",
      toggle: "Idioma",
    },
    trust: {
      years: "Años en Servicios Húmedos",
      bilingual: "Bilingüe EN / ES",
      based: "Basado en Newnan, GA",
      subcontractor: "Subcontratista de Servicios",
    },
    about: {
      title: "Sobre Tino",
      p1: "Tino Gutierrez tiene 25 años de experiencia en servicios húmedos subterráneos en el oeste de Georgia y el área metropolitana de Atlanta.",
      p2: "Pasó 19 años como operador de equipo con Brent, una de las compañías de servicios más grandes de la región, trabajando en alcantarillado sanitario, tormenta y agua. Después pasó 6 años como capataz, liderando cuadrillas en sitios comerciales y municipales.",
      p3: "Formó TGR Utility Subcontractor LLC para subcontratar instalación y reparación de servicios húmedos para contratistas generales.",
      p4: "Padre hispano de cuatro hijos, orientado a la familia, Tino lleva la misma dedicación a cada sitio de trabajo. Habla inglés y español con fluidez — comunicación clara con cuadrillas, superintendentes y CG.",
    },
    home: {
      heroTitle: "Servicio a Contratistas Generales en el Oeste de Georgia",
      heroSubtitle:
        "25 años instalando y reparando alcantarillado sanitario, drenaje pluvial y líneas de agua en sitios comerciales y municipales.",
      projectsTitle: "Portafolio de Proyectos",
      projectsNote:
        "Trabajo reciente de servicios húmedos subterráneos en el área metropolitana de Atlanta y el norte de Georgia.",
      ctaTitle: "Póngase en Contacto",
      ctaSubtitle: "Llame, envíe un mensaje de texto o correo sobre el alcance, ubicación y cronograma del trabajo.",
    },
    contact: {
      title: "Contactar a Tino",
      subtitle: "Cuénteme sobre el trabajo — alcance, ubicación y cronograma.",
      name: "Su Nombre",
      company: "Empresa / Nombre del CG",
      email: "Correo",
      phone: "Teléfono",
      message: "Alcance y Detalles del Trabajo",
      submit: "Enviar Mensaje",
      success: "Mensaje enviado — me pondré en contacto pronto.",
      error: "Algo salió mal. Por favor llame o envíe un mensaje de texto.",
    },
    footer: {
      serviceArea: "Área de Servicio",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function getUi(locale: Locale) {
  return ui[locale];
}
