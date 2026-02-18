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
