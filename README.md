# Joseph Gallery

Joseph Gallery es una galería dinámica y responsiva construida con Angular y Firebase. La aplicación permite a los usuarios subir imágenes, almacenar metadatos y visualizar una galería estilizada de manera moderna.

## 🚀 Características

- 📷 **Subida de imágenes**: Los usuarios pueden cargar imágenes con un nombre y una descripción.
- 🗂️ **Almacenamiento de metadatos**: Los datos de las imágenes (nombre, descripción y fecha) se guardan en Firestore.
- 💾 **Almacenamiento en Firebase Storage**: Las imágenes se almacenan de forma segura en Firebase Storage.
- 📱 **Interfaz responsiva**: Diseñada para funcionar bien en dispositivos móviles y de escritorio.

---

## 🛠️ Tecnologías Utilizadas

- **Angular**: Framework para construir la aplicación web.
- **Firebase**:
  - Firebase Storage: Almacenamiento de las imágenes.
  - Firestore: Base de datos para los metadatos de las imágenes.
- **HTML, CSS, TypeScript**: Para la estructura, el estilo y la lógica del proyecto.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el Repositorio
Clona el proyecto desde GitHub:
```bash
git clone https://github.com/HelloNerk/joseph-gallery.git
cd joseph-gallery
```

### 2. Instalar Dependencias
Instala las dependencias necesarias:
```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo
Inicia el servidor de desarrollo:
```bash
ng serve
```
### 4. Acceder a la Aplicación
Abre tu navegador y navega a:
```bash
http://localhost:4200
```

## 📋 Notas
### Configuración de Firebase
Asegúrate de configurar correctamente las credenciales de Firebase en el archivo src/environments/environment.ts:

```bash
export const environment = {
  production: false,
  firebase: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
    measurementId: "TU_MEASUREMENT_ID",
  }
};
```

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, por favor abre un Issue o envía un Pull Request.

## 🧑‍💻 Autor
Desarrollado por Joseph Alexis Huamani Mandujano, estudiante de Ingeniería de Software en la UPC, como un proyecto para aprender y explorar la integración de Angular con Firebase.

## ⚖️ Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para propósitos educativos y personales.
