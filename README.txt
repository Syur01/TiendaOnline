# Tienda Online - Angular

## 📌 Descripción
Esta aplicación permite a los usuarios registrarse e iniciar sesión. Los datos ingresados se almacenan en la base de datos y pueden visualizarse a través de Postman.

## 🚀 Funcionalidad

### 🔹 Registro de Usuario (`/registro`)
1. El usuario ingresa sus datos en el formulario de registro.
2. Al enviarlos, se crea un nuevo usuario en la base de datos.
3. Se puede verificar el resultado de dos formas:
   - **Desde la consola del navegador** (Inspeccionar → Consola).
   - **Desde Postman**, realizando una petición `GET` para ver la lista de usuarios registrados.

### 🔹 Inicio de Sesión (`/login`)
1. El usuario introduce su nombre y contraseña.
2. Si los datos son correctos, se muestra el mensaje **"Usuario creado con éxito"**.
3. Si los datos son incorrectos, se notifica al usuario.
4. Se puede confirmar en **Postman** mediante una petición `GET`, donde aparecerá el usuario registrado junto con sus datos.
