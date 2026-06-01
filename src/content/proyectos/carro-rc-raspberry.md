---
titulo: "Carrito robótico con Raspberry Pi 4"
descripcion: "Vehículo robótico controlado por Raspberry Pi 4 con app móvil para manejo remoto y modo automático por comandos. Detección de obstáculos con ultrasónico montado en servo (barrido de 180°), medición de RPM por encoder, fuente DC-DC regulada y puente H para control PWM de motores."
categoria: electronica
fecha: 2026-01-15
destacado: false
tags: ["Raspberry Pi 4", "Robótica", "Python", "PWM", "Ultrasónico", "App móvil", "Control"]
imagenPortada: "../../assets/proyectos/carro-rc-rasp.png"
enlaces:
  repo: "https://github.com"
---

# Descripción

Carrito robótico basado en Raspberry Pi 4 controlado a distancia desde el celular
mediante una aplicación móvil. La app envía comandos para el manejo manual y, con
ciertos comandos, activa un **modo automático** en el que el carro navega por sí
mismo evitando obstáculos. El sistema reconoce dónde se encuentra cada obstáculo
gracias a un sensor ultrasónico montado sobre un servo que realiza un barrido de
180°, y mide la velocidad de las ruedas con un encoder.

# Hardware

- Raspberry Pi 4 (microcontrolador / unidad de control principal)
- Convertidor DC-DC como fuente regulada de alimentación
- Puente H para control PWM y mejor manejo de los motores
- Servomotor para el barrido de 180° del sensor ultrasónico
- Sensor ultrasónico para detección de obstáculos y mapeo de distancias
- Encoder para la medición de las RPM del carro

# Control remoto (app móvil)

La aplicación en el celular se comunica con la Raspberry Pi para manejar el carrito
de forma remota. Permite el control manual de la dirección y la velocidad, y mediante
comandos específicos activa el modo automático de navegación autónoma.

# Modo automático

En modo automático el carro navega por sí solo: el servo orienta el sensor ultrasónico
en un barrido de 180° para reconocer dónde está cada obstáculo, y con esa información
decide la trayectoria. El encoder retroalimenta las RPM de las ruedas para regular la
velocidad mediante PWM a través del puente H.

# Lo que aprendí

La combinación del servo con el sensor ultrasónico para el barrido de 180° permitió
construir un mapa sencillo del entorno frente al carro y tomar decisiones de navegación
más confiables que con una sola lectura fija. El encoder, junto con el control PWM por
puente H, fue clave para mantener una velocidad estable en el modo automático.