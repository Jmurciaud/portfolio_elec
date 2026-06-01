---

titulo: "Electrificador / Impulsor 12V para Cercas Eléctricas"
descripcion: "Diseño y fabricación de un electrificador alimentado a 12 V capaz de generar pulsos de alta tensión mediante un transformador elevador y una etapa de descarga controlada. Incluye validación del esquemático, corrección de errores y diseño de PCB."
categoria: electronica
fecha: 2026-06-01
destacado: false
tags: ["Electrificador", "Alta Tensión", "PCB", "Electrónica de Potencia", "KiCad", "12V"]
imagenPortada: "../../assets/proyectos/electrificador-12v.png"

---

# Descripción

Desarrollo de un electrificador de 12 V diseñado para aplicaciones de cercado eléctrico y generación de pulsos de alta tensión. El sistema utiliza una etapa osciladora basada en transistor de potencia MJE13005, un transformador elevador y una etapa de descarga mediante DIAC y TRIAC para producir impulsos periódicos de alto voltaje.

El proyecto incluyó el diseño completo del esquemático, construcción de un prototipo funcional, validación experimental y desarrollo de una PCB optimizada para facilitar el montaje y mejorar la confiabilidad del sistema.

# Objetivos

* Diseñar un electrificador alimentado por batería de 12 V.
* Generar pulsos de alta tensión de forma controlada.
* Validar el funcionamiento mediante pruebas reales.
* Diseñar una PCB compacta y fácil de fabricar.
* Mejorar la estabilidad y robustez del circuito.

# Hardware Utilizado

* Transistor de potencia MJE13005.
* Transformador elevador de pulsos.
* DIAC D11.
* TRIAC BT136.
* Diodos 1N4007 y FR107.
* Capacitores electrolíticos de filtrado y almacenamiento.
* Resistencias de control y temporización.
* LED indicador de funcionamiento.
* PCB diseñada en KiCad.

# Funcionamiento

La etapa primaria utiliza un transistor MJE13005 para excitar el transformador elevador desde una fuente de 12 V. El transformador incrementa el voltaje y carga el capacitor principal de almacenamiento.

Posteriormente, la red formada por resistencias, capacitor, DIAC y TRIAC determina el instante de disparo. Cuando el voltaje alcanza el nivel de conducción del DIAC, este activa el TRIAC y libera la energía almacenada en forma de un pulso de alta tensión hacia la salida.

Este proceso se repite continuamente generando impulsos periódicos adecuados para aplicaciones de electrificación.

# Validación del Esquemático

Antes de fabricar la PCB se realizó una revisión completa del circuito para verificar:

* Polaridad de los componentes.
* Correcta conexión del transformador.
* Disparo adecuado del DIAC y TRIAC.
* Funcionamiento del oscilador principal.
* Protección frente a inversión de polaridad.

Las pruebas permitieron confirmar el correcto funcionamiento de la etapa de generación y descarga de energía.

# Diseño PCB

La tarjeta fue desarrollada en KiCad considerando:

* Pistas anchas para la etapa de potencia.
* Separación adecuada entre zonas de baja y alta tensión.
* Distribución optimizada de componentes.
* Facilidad de ensamblaje manual.
* Reducción de ruido eléctrico e interferencias.

Además, se incorporaron orificios de montaje para facilitar la instalación dentro de un gabinete.

# Solución de Errores

Durante el desarrollo se identificaron algunos aspectos que requirieron corrección:

* Ajuste de las pistas de potencia para soportar mayor corriente.
* Reubicación de componentes para simplificar el enrutamiento.
* Optimización de la carga del capacitor principal.
* Corrección de polaridades en pruebas iniciales.
* Mejora en la disipación térmica de los dispositivos de potencia.

# Resultados

| Parámetro                  | Resultado              |
| -------------------------- | ---------------------- |
| Voltaje de alimentación    | 12 V DC                |
| Tipo de salida             | Pulsos de alta tensión |
| PCB fabricable             | Sí                     |
| Validación del esquemático | Completada             |
| Pruebas funcionales        | Exitosas               |
| Estado del proyecto        | Operativo              |

# Lo que Aprendí

Este proyecto permitió profundizar en el diseño de circuitos de alta tensión, generación de pulsos y electrónica de potencia. También demostró la importancia de validar el esquemático antes de fabricar la PCB, ya que pequeños errores pueden afectar significativamente el desempeño del sistema.

El diseño de la PCB requirió especial atención a las distancias de seguridad, el ancho de las pistas y la ubicación de los componentes para garantizar un funcionamiento estable y seguro.