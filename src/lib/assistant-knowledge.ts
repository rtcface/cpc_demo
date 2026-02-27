export interface KnowledgeItem {
  id: string;
  keywords: string[];
  question: string;
  response: string;
  link?: string;
  linkText?: string;
}

export interface AssistantResponse {
  text: string;
  link?: string;
  linkText?: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: "atribuciones",
    keywords: [
      "atribuciones",
      "funciones",
      "hace",
      "qué hace",
      "competencias",
      "facultades",
      "poderes",
      "trabajos",
      "actividades",
    ],
    question: "¿Qué hace el CPC?",
    response:
      "El Comité de Participación Ciudadana (CPC) del Sistema Anticorrupción de Tlaxcala tiene las siguientes atribuciones principales:\n\n" +
      "• **Coordinación e Información**: Participa en la Comisión Ejecutiva y accede a información técnica del Sistema Estatal.\n\n" +
      "• **Propuestas y Mejora Regulatoria**: Emite opiniones sobre políticas integrales anticorrupción y propone proyectos de coordinación interinstitucional.\n\n" +
      "• **Evaluación y Vigilancia**: Opina sobre el Programa Anual de Trabajo y monitorea el funcionamiento del Sistema Estatal Anticorrupción.\n\n" +
      "• **Vinculación Ciudadana**: Promueve investigaciones con instituciones académicas y fortalece la contraloría social.",
    link: "/conocenos/atribuciones",
    linkText: "Ver atribuciones completas",
  },
  {
    id: "no-hace",
    keywords: [
      "no hace",
      "no puede",
      "investigar",
      "sancionar",
      "encarcelar",
      "castigar",
      "multar",
      "detener",
      "imponer",
      "delito",
      "juicio",
      "pena",
      "cárcel",
      "limites",
      "límites",
      "qué no hace",
    ],
    question: "¿Qué NO hace el CPC?",
    response:
      "Es importante que conozcas nuestros límites legales:\n\n" +
      "**Sobre la impartición de justicia**: El CPC NO tiene facultades para sancionar penalmente ni encarcelar a servidores públicos. No somos una autoridad judicial.\n\n" +
      "**Sobre la investigación administrativa**: El Comité NO realiza investigaciones directas ni impone sanciones administrativas.\n\n" +
      "**Lo que SÍ hacemos**: Brindamos orientación jurídica especializada para canalizar tu inquietud ante las autoridades competentes (Tribunal de Contasía, Fiscalía Anticorrupción, etc.).",
    link: "/conocenos/que-no-hace",
    linkText: "Más sobre nuestros límites",
  },
  {
    id: "integrantes",
    keywords: [
      "integrantes",
      "quiénes",
      "integrado",
      "miembros",
      "integran",
      "presidente",
      "vocales",
      "ciudadanos",
      "composición",
    ],
    question: "¿Quiénes integran el CPC?",
    response:
      "El CPC está integrado por ciudadanos con experiencia y prestigio en temas de transparencia, rendición de cuentas y combate a la corrupción. Los integrantes son:\n\n" +
      "• **Mtro. Juan Carlos Cruz Jiménez** - Presidente\n" +
      "• **Lcdo. Carlos Jonathan Pérez Ramírez** - Integrante\n" +
      "• **Lcda. Guadalupe Ortega Gutiérrez** - Integrante\n" +
      "• **Lcdo. Brandon Jiménez Enríquez** - Integrante\n" +
      "• **Cargo pendiente por designar** - Integrante\n\n" +
      "Todos son ciudadanos tlaxcaltecas con trayectoria en materia de transparencia y anticorrupción.",
    link: "/integrantes",
    linkText: "Ver integrado completo",
  },
  {
    id: "denuncia",
    keywords: [
      "denuncia",
      "denunciar",
      "queja",
      "reportar",
      "reportar",
      "corrupción",
      "denunciar",
      "fraude",
      "soborno",
      "malversación",
      "robo",
      "abuso",
      "irregularidad",
    ],
    question: "¿Cómo denunciar corrupción?",
    response:
      "Si deseas denunciar un hecho de corrupción, el CPC te orienta sobre los canales adecuados:\n\n" +
      "**Puedes denunciar ante:**\n" +
      "• **Fiscalía Especializada en Combate a la Corrupción**: Para hechos que podrían constituir delitos penales.\n" +
      "• **Contraloría del municipio o dependencia**: Para quejas contra servidores públicos.\n\n" +
      "El CPC no investiga ni sanciona, pero puede orientarte sobre cuál es la instancia correcta para tu caso.",
    link: "/conocenos/que-no-hace",
    linkText: "Más información",
  },
  {
    id: "normativa",
    keywords: [
      "normativa",
      "ley",
      "leyes",
      "reglamento",
      "reglamentos",
      "legal",
      "legislación",
      "derecho",
      "estatal",
      "nacional",
      "internacional",
    ],
    question: "¿Qué normativa rige al CPC?",
    response:
      "El CPC se rige por normativa en tres niveles:\n\n" +
      "**Nivel Estatal**:\n" +
      "• Ley del Sistema Anticorrupción del Estado de Tlaxcala\n" +
      "• Ley de Responsabilidades Administrativas\n\n" +
      "**Nivel Nacional**:\n" +
      "• Sistema Nacional Anticorrupción\n" +
      "• Ley General del Sistema Anticorrupción\n\n" +
      "**Nivel Internacional**:\n" +
      "• Convenciones ONU contra la Corrupción\n" +
      "• OECD Anticorruption Standards",
    link: "/normatividad",
    linkText: "Ver normativa completa",
  },
  {
    id: "objetivo",
    keywords: [
      "objetivo",
      "propósito",
      "misión",
      "finalidad",
      "meta",
      "para qué",
      "por qué",
    ],
    question: "¿Cuál es el objetivo del CPC?",
    response:
      "El objetivo principal del CPC es:\n\n" +
      "• **Fortalecer la transparencia y la integridad pública** en el Estado de Tlaxcala.\n\n" +
      "• **Coordinar acciones** entre las instituciones del Sistema Anticorrupción.\n\n" +
      "• **Promover la participación ciudadana** en la prevención y detección de la corrupción.\n\n" +
      "• **Proponer políticas públicas** basadas en estudios técnicos para mejorar la gestión gubernamental.",
    link: "/conocenos/objetivo-general",
    linkText: "Ver objetivo completo",
  },
  {
    id: "mision",
    keywords: ["misión", "mision", "visión", "vision", "valores"],
    question: "¿Cuál es la misión del CPC?",
    response:
      "La misión del CPC Tlaxcala es:\n\n" +
      "Ser el puente entre la sociedad civil y las instituciones públicas para construir una cultura de integridad, transparencia y rendición de cuentas en el Estado de Tlaxcala.",
    link: "/nuestro-compromiso/mision",
    linkText: "Ver misión y visión",
  },
  {
    id: "contacto",
    keywords: [
      "contacto",
      "ubicación",
      "dirección",
      "teléfono",
      "email",
      "correo",
      "donde",
      "dónde",
      "atención",
      "horario",
    ],
    question: "¿Cómo contacto al CPC?",
    response:
      "Puedes contactar al CPC Tlaxcala a través de:\n\n" +
      "• **Dirección**: Blvd. Revolución #9, Col. Centro, Tlaxcala, Tlax.\n" +
      "• **Teléfono**: (246) 123 4567\n" +
      "• **Correo**: contacto@cpc-tlaxcala.org\n\n" +
      "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 horas.",
    link: "/conocenos",
    linkText: "Más sobre el CPC",
  },
  {
    id: "programa",
    keywords: [
      "programa",
      "plan",
      "trabajo",
      "anual",
      "proyectos",
      "2024",
      "2025",
      "2026",
    ],
    question: "¿Qué programas tiene el CPC?",
    response:
      "El CPC desarrolla diversos programas y proyectos:\n\n" +
      "• **Programa de Participación Ciudadana**\n" +
      "• **Fortalecimiento de la Contraloría Social**\n" +
      "• **Acciones de Prevención de la Corrupción**\n" +
      "• **Colaboración con Municipios**\n" +
      "• **Proyectos de Integridad Policial**\n\n" +
      "Puedes consultar el programa anual de trabajo en la sección correspondiente.",
    link: "/nuestro-trabajo",
    linkText: "Ver programas completos",
  },
];

export const quickReplies = [
  { label: "¿Qué hace el CPC?", id: "atribuciones" },
  { label: "Normativa", id: "normativa" },
  { label: "Denuncias", id: "denuncia" },
];

export function findRelevantResponse(
  userMessage: string,
): AssistantResponse | null {
  const normalizedMessage = userMessage.toLowerCase().trim();

  // Check for out-of-scope keywords first
  const outOfScopeKeywords = [
    "investigar",
    "sancionar",
    "encarcelar",
    "castigar",
    "multar",
    "detener",
    "imponer",
    "delito",
    "juicio",
    "pena",
    "cárcel",
  ];

  const isOutOfScope = outOfScopeKeywords.some((keyword) =>
    normalizedMessage.includes(keyword),
  );

  if (isOutOfScope) {
    const item = knowledgeBase.find((k) => k.id === "no-hace");
    if (item) {
      return {
        text: item.response,
        link: item.link,
        linkText: item.linkText,
      };
    }
  }

  // Search in knowledge base
  for (const item of knowledgeBase) {
    const hasKeyword = item.keywords.some((keyword) =>
      normalizedMessage.includes(keyword),
    );
    if (hasKeyword) {
      return {
        text: item.response,
        link: item.link,
        linkText: item.linkText,
      };
    }
  }

  // No match found
  return null;
}

export function getQuickReplyResponse(
  quickReplyId: string,
): AssistantResponse | null {
  const item = knowledgeBase.find((k) => k.id === quickReplyId);
  if (item) {
    return {
      text: item.response,
      link: item.link,
      linkText: item.linkText,
    };
  }
  return null;
}
