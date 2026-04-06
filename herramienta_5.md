1. Structurizr

Introducción:

En el ámbito de la ingeniería de software moderna, la documentación arquitectónica es desde hace tiempo víctima de la obsolescencia rápida, las ilustraciones a mano se vuelven obsoletas antes de que se realicen los cambios a la implementación. Para remediar esta falta de coincidencia entre el artefacto del modelo y la tecnología en la que se soporta, se introduce un nuevo paradigma conocido como "Diagramas como Código" (DaC, en inglés), y en este contexto, Structurizr es el valor de referencia, facilitando como lo es, la forma en que los ingenieros de software conceptualizan, documentan y comunican el diseño para los sistemas software.

¿Qué es Structurizr?

Structurizr es una herramienta con el paradigma de "modelos como código", especialmente construida para soportar y visualizar el Modelo C4 de arquitectura software. A diferencia de las aplicaciones de dibujo, en Structurizr, arquitectos y desarrolladores escriben código usando un Lenguaje de Dominio Específico (Structurizr DSL) para definir un modelo único, a partir del cual se generan automáticamente una serie de vistas arquitectónicas. Creada por Simon Brown, el mismo autor del Modelo C4 garantiza la máxima compatibilidad y rigor con los estándares de esta metodología.

Funcionalidades destacadas

Structurizr otorga capacidades técnicas que persiguen estrictamente la ingeniería:

- Generación de múltiples vistas: Un único archivo de código incluye los diagramas contextuales de Contexto, Contenedores, Componentes, Despliegue y Paisaje del sistema.
- Validación de reglas: Previene errores arquitectónicos comunes en los principiantes (como mezclar niveles de abstracción al colocar un esquema de base de datos en un diagrama de contexto a un alto nivel).
- Documentación Adicional y ADRs: Permite incluir Registros de Decisiones Arquitectónicas (ADRs) y wikis en Markdown o AsciiDoc directamente junto al modelo.
- Compatibilidad con Inteligencia Artificial: Dado que los Modelos de Lenguaje (LLMs) son capaces de realizar un magnífico procesamiento del texto, el formato de código de Structurizr es una opción ideal para que la IA genere, consulte o resuma arquitecturas completas sin efectos de roseado gráfico innecesarios.

Facilidad de uso

La usabilidad de Structurizr debe considerarse desde el enfoque de un desarrollador. Inicialmente presenta una curva de aprendizaje mayor que las herramientas visuales, pues en vez de usar cut &amp; paste hay que aprender la sintaxis de su DSL [1]. Sin embargo, su naturaleza textual es lógicamente más rica y mucho más fácil de mantener a largo plazo. Si un equipo tiene que cambiar el nombre de una base de datos o de un microservicio, todo lo que hay que hacer es modificar una línea de texto y el motor de Structurizr actualizará automáticamente todos los diagramas donde el elemento en cuestión esté presente, ahorrando un sinfín de horas de rediseño manual [2].

# Colaboración del trabajo

Structurizr reinventa la colaboración llevándola a su contexto nativo, el control de versiones: en vez de trabajar en una pizarra que todo el mundo puede escribir, los archivos `.dsl` de la arquitectura se almacenan junto al código de la aplicación en repositorios, etc., como por ejemplo Git. De esta forma los equipos pueden colaborar en Pull Requests, revisando, discutiendo, acordando cambios en la arquitectura como lo harían con cualquier otra pieza de código de la aplicación, y así se mantiene un registro inmutable y se reduce la condena a no salirse del conocimiento tribal no documentado.

# Integración con otras herramientas

La capacidad para integrarse en el ciclo de vida del desarrollo de software (SDLC) es una de sus principales virtudes:

- Entornos de Desarrollo Integrado (IDE): Existen extensiones oficiales y de la comunidad para VS Code y plugins para IntelliJ IDEA, resaltado de sintaxis, autocompletando y previsualizando diagramas en vivo a medida que el ingeniero programa.
- Automatización CI/CD: Resulta sencillo enlazar con las tuberías de integración continua propias de la herramienta, por ejemplo, GitHub Actions. De esta manera, los diagramas pueden autogenerarse y autoprogramarse de forma desatendida tras cada actualización en el repositorio.
- Exportación y Renderizado: El modelo no queda atrapado dentro de la plataforma; a través de su interfaz (CLI/Server), la arquitectura se puede exportar de forma dinámica hacia formatos paralelos como PlantUML, Mermaid o JSON.

# Conclusiones y aplicación pedagógica

Como gestor de proyectos y docente, Structurizr es una herramienta de difícil de sustitución como generador de disciplina técnica; propicia que estudiantes y profesionales piensen de manera estructurada, ya que pueden verificar la lógica de sus dependencias en vez de sus habilidades como diseñadores gráficos.

Structurizr posiciona no solo como una herramienta para dibujar, sino una herramienta definitiva para estructurar y gobernar proyectos tecnológicos complejos. Se trata de la solución ideal para los equipos de desarrollo moderno que quieren fundir completamente la documentación arquitectónica dentro de su flujo de trabajo de ingeniería y de código fuente.



