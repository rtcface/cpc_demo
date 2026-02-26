# Criterios de Aceptación - Reingeniería CPC Tlaxcala

Este documento contiene las historias de usuario y criterios de aceptación redactados en lenguaje Gherkin para la actualización del micrositio.

---

## Característica: Identidad Visual y Experiencia de Usuario (UI/UX)

**Como** usuario del micrositio
**Quiero** que la interfaz utilice colores institucionales y fondos degradados adaptables
**Para** tener una experiencia visual profesional y coherente tanto en modo claro como oscuro.

### Escenario: Aplicación de estilos visuales y modo oscuro

**Dado** que el usuario accede al micrositio desde cualquier dispositivo
**Cuando** el sistema detecta la preferencia de tema (claro u oscuro) del navegador o sistema operativo
**Entonces** el fondo debe mostrar degradados basados en los colores del logotipo del CPC
**Y** todos los elementos de la interfaz deben utilizar la paleta de colores institucionales
**Y** la legibilidad y el contraste deben mantenerse óptimos tanto en el modo claro como en el modo oscuro.

---

## Característica: Reestructuración del Menú de Navegación

**Como** arquitecto de información
**Quiero** renombrar el menú "Nosotros" por "Conócenos" y reorganizar sus submenús
**Para** mejorar la navegación y agrupar la información institucional de manera lógica.

### Escenario: Cambio de etiqueta y reubicación de secciones

**Dado** que el usuario accede a la barra de navegación principal
**Cuando** el sistema carga los elementos del menú
**Entonces** la opción "Nosotros" ya no debe ser visible
**Y** debe aparecer una nueva opción llamada "Conócenos"
**Y** dentro de "Conócenos" deben aparecer las subsecciones:
| Submenú |
| :--- |
| ¿Quiénes integran el CPC? |
| Objetivo General |
| Misión y Visión |
| Relevancia del CPC |
| Atribuciones |

---

## Característica: Actualización de Contenido Estratégico en Inicio

**Como** responsable de comunicación del CPC
**Quiero** actualizar el texto introductorio en la página de inicio
**Para** proyectar el papel estratégico del comité en la lucha anticorrupción.

### Escenario: Sustitución de descripción institucional

**Dado** que el usuario se encuentra en la página de "Inicio"
**Cuando** el sistema renderiza la sección principal de bienvenida
**Entonces** no debe mostrarse el texto: "Conoce a los miembros que conforman el Comité..."
**Y** en su lugar debe aparecer el párrafo: "El Comité de Participación Ciudadana (CPC) del Sistema Anticorrupción del Estado de Tlaxcala tiene un papel clave y estratégico dentro de la lucha contra la corrupción..."
**Y** debe visualizarse la nueva infografía grupal en lugar de las fotos individuales.

---

## Característica: Automatización de "Actividades Relevantes"

**Como** administrador del contenido
**Quiero** vincular la sección de actividades con la página oficial de Facebook
**Para** optimizar el tiempo de actualización y asegurar que las publicaciones recientes se muestren automáticamente.

### Escenario: Sincronización dinámica de publicaciones

**Dado** que existen nuevas publicaciones en la cuenta oficial de Facebook del CPC
**Cuando** un ciudadano visita la sección "Actividades Relevantes" en la página de Inicio
**Entonces** el sistema debe mostrar un feed o tarjetas dinámicas con las publicaciones más recientes de Facebook
**Y** cada actividad debe incluir el enlace directo a la publicación original para fomentar la interacción social.

---

## Característica: Reubicación de Perfiles de Integrantes

**Como** desarrollador
**Quiero** mover el bloque de perfiles individuales de la página de Inicio a la sección específica de integrantes
**Para** evitar la saturación de información en la página principal.

### Escenario: Visualización de integrantes en el nuevo submenú

**Dado** que el usuario navega en el menú "Conócenos"
**Cuando** hace clic en la opción "¿Quiénes integran el CPC?"
**Entonces** el sistema debe cargar el componente con las fotografías individuales y síntesis curriculares
**Y** dicho componente ya no debe estar presente en la raíz de la página de Inicio.

---

## Característica: Secciones de Identidad Legal (Relevancia y Atribuciones)

**Como** ciudadano interesado en las facultades del comité
**Quiero** acceder a las secciones de Relevancia y Atribuciones bajo el menú Conócenos
**Para** conocer el alcance jurídico y social del CPC.

### Escenario: Consulta de puntos de Relevancia del CPC

**Dado** que el usuario selecciona "Relevancia del CPC" dentro de "Conócenos"
**Cuando** la página carga el contenido
**Entonces** deben visualizarse los 6 puntos clave de impacto social (Voz de la sociedad, Políticas públicas, etc.)

### Escenario: Consulta de Atribuciones y Limitaciones

**Dado** que el usuario selecciona "Atribuciones" dentro de "Conócenos"
**Cuando** la sección se despliega
**Entonces** deben mostrarse las facultades legales del comité
**Y** debe incluirse de forma destacada el bloque "¿Qué NO hace el CPC?" para aclarar sus límites legales.

---

## Característica: Centralización de Misión y Visión

**Como** usuario del sitio
**Quiero** que la Misión y Visión estén integradas en la sección de identidad "Conócenos"
**Para** tener una experiencia de usuario más fluida.

### Escenario: Acceso a Misión y Visión

**Dado** que el usuario busca los valores institucionales
**Cuando** selecciona "Misión y Visión" desde el submenú de "Conócenos"
**Entonces** el sistema debe mostrar los textos oficiales sobre prevención y fortalecimiento ético.

---

## Característica: Infografía Interactiva de Normatividad
**Como** ciudadano o consultor legal
**Quiero** visualizar el marco normativo mediante una infografía interactiva e institucional
**Para** identificar y acceder rápidamente a los documentos legales organizados por jerarquía.

### Escenario: Visualización de la infografía de normativa
  [cite_start]**Dado** que el usuario accede a la ruta `/normatividad/` o selecciona "Normativa" en el menú principal [cite: 97, 98]
  **Cuando** la página carga el contenido
  [cite_start]**Entonces** el sistema debe mostrar una infografía interactiva basada en el diseño institucional (grid de tarjetas) 
  **Y** la información debe estar categorizada en cuatro bloques principales:
    * [cite_start]Marco Normativo Internacional [cite: 100]
    * [cite_start]Marco Normativo Nacional [cite: 108]
    * [cite_start]Marco Normativo Estatal [cite: 119]
    * [cite_start]Marco Normativo Interno [cite: 126]

### Escenario: Interacción con los elementos de la infografía
  **Dado** que el usuario visualiza la infografía interactiva
  [cite_start]**Cuando** el usuario hace clic o interactúa con una categoría específica (ej. Marco Normativo Estatal) [cite: 119]
  **Entonces** el sistema debe desplegar de forma visual y atractiva el listado de leyes correspondientes:
    * [cite_start]Constitución Política del Estado de Tlaxcala [cite: 120]
    * [cite_start]Ley del Sistema Anticorrupción del Estado [cite: 121]
    * [cite_start]Ley de Transparencia del Estado [cite: 122]
    * (Y demás leyes del listado estatal) [cite_start][cite: 123-125]
  [cite_start]**Y** cada elemento debe funcionar como un acceso directo (hipervínculo) al documento PDF oficial [cite: 120-125].

### Escenario: Acceso a documentos internacionales e internos
  **Dado** que el usuario requiere consultar tratados o reglamentos específicos
  [cite_start]**Cuando** selecciona las categorías de "Internacional" o "Interno" [cite: 100, 126]
  **Entonces** el sistema debe permitir la descarga o visualización de documentos clave como:
    * [cite_start]Convención de las Naciones Unidas Contra la Corrupción [cite: 101]
    * [cite_start]Pacto Internacional de Derechos Civiles y Políticos [cite: 106]
    * [cite_start]Reglamento Interno del CPC [cite: 127, 128]

    ---

## Característica: Organización de "Nuestro Trabajo" por Periodos
**Como** ciudadano o integrante del sistema
**Quiero** que la sección de trabajo esté organizada por ciclos anuales
**Para** consultar el histórico de actividades y documentos de manera ordenada y cronológica.

### Escenario: Agrupación de contenido existente en el periodo 2024 - 2025
  [cite_start]**Dado** que el usuario accede a la sección "Nuestro Trabajo" [cite: 129, 130]
  **Cuando** el sistema carga los componentes de la página
  **Entonces** debe aparecer un contenedor de nivel superior titulado "Periodo 2024 - 2025"
  **Y** dentro de este contenedor se deben mostrar los recuadros actuales:
    * [cite_start]Programa de Trabajo Anual [cite: 131]
    * [cite_start]Actividades (correspondientes a ese año) [cite: 132]
    * [cite_start]Informes [cite: 133]

### Escenario: Preparación para el nuevo ciclo 2025 - 2026
  **Dado** que el sitio entra en un nuevo año de gestión
  **Cuando** el usuario visualiza la sección "Nuestro Trabajo"
  **Entonces** debe visualizar un segundo contenedor de nivel superior titulado "Periodo 2025 - 2026"
  [cite_start]**Y** este debe mantener la misma estructura y funcionalidad de recuadros que el periodo anterior 
  **Y** el diseño debe permitir colapsar o expandir cada periodo para facilitar la lectura.

### Escenario: Mantenimiento de la estructura interna
  [cite_start]**Dado** que el contenido está agrupado por años [cite: 132]
  **Cuando** el usuario interactúa con un recuadro específico (ej. Informes) dentro de cualquier periodo
  **Entonces** la funcionalidad de visualización o descarga de documentos debe operar exactamente igual a la versión anterior, respetando la navegación actual.

  ---

## Característica: Asistente Virtual Inteligente "CPC Asistente"
**Como** ciudadano que navega por el micrositio
**Quiero** interactuar con un chat conversacional
**Para** resolver mis dudas sobre el marco normativo, integrantes y funciones del CPC de forma rápida, clara y precisa.

### Escenario: Activación y mensaje de bienvenida
  **Dado** que el usuario hace clic en el widget del "CPC Asistente" en cualquier página del sitio
  **Cuando** se despliega la interfaz del chat
  **Entonces** el sistema ya no debe mostrar el aviso de "en construcción"
  **Y** debe enviar un mensaje de bienvenida institucional (ej. "Hola, soy el Asistente del CPC Tlaxcala. ¿En qué te puedo ayudar hoy?")
  **Y** debe mostrar opciones rápidas sugeridas como: "¿Qué hace el CPC?", "Normativa" o "Denuncias".

### Escenario: Respuestas fundamentadas en el contenido oficial
  **Dado** que el usuario realiza una pregunta sobre el comité (ej. "¿Cuáles son sus atribuciones?" o "¿Quiénes lo integran?")
  **Cuando** el asistente procesa la solicitud
  **Entonces** debe generar una respuesta en lenguaje ciudadano y claro, basada estrictamente en la información oficial del sitio
  **Y** debe incluir al final de su respuesta un enlace directo a la sección correspondiente del micrositio para que el usuario pueda ampliar la información.

### Escenario: Manejo de solicitudes fuera de competencia (Limitaciones legales)
  **Dado** que el usuario solicita al chat que investigue un delito, encarcele a un funcionario o imponga una sanción
  **Cuando** el asistente analiza la intención de la consulta
  **Entonces** debe responder aclarando sus límites legales basándose en la sección "¿Qué NO hace el CPC?"
  **Y** debe explicar amablemente que el comité no investiga ni sanciona, pero que puede brindar orientación jurídica para canalizar la denuncia a la institución correspondiente.

### Escenario: Manejo de consultas no relacionadas (Fallback)
  **Dado** que el usuario hace preguntas fuera de contexto o no relacionadas con el Sistema Anticorrupción
  **Cuando** el asistente no encuentra información relevante en la base de conocimientos del sitio
  **Entonces** debe disculparse amablemente indicando que su conocimiento se limita a la información pública, normativa y actividades del CPC Tlaxcala.