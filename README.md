# Aplicacion TODO en React

Este código es un componente de una aplicación web construida con React, que permite agregar, actualizar y eliminar tareas de un to do list. Utiliza el hook useState para gestionar el estado de las tareas y el hook useEffect para cargar las tareas desde un servidor en el momento en que se monta el componente.

El código comienza importando las dependencias necesarias para la aplicación, incluyendo React, los hooks useState y useEffect y la librería axios para realizar peticiones HTTP al servidor. También se importa un archivo CSS para la apariencia del componente.

Luego se define la función App, que es el componente principal de la aplicación. Dentro de esta función, se definen dos estados mediante el hook useState: tasks es una lista de tareas, inicialmente vacía, y newTask es un objeto que representa la tarea que se está creando actualmente, con dos propiedades title y description inicializadas a una cadena vacía.

El hook useEffect se utiliza para cargar las tareas desde el servidor cuando el componente se monta por primera vez. Se realiza una petición HTTP GET a la ruta '/tasks' utilizando axios y se actualiza el estado tasks con la respuesta del servidor.

La función handleNewTaskChange se define para actualizar el estado newTask cuando se cambian los valores de los campos del formulario de creación de tareas. Recibe el evento de cambio como argumento y extrae el nombre y valor del campo que ha cambiado utilizando la desestructuración. Luego, utiliza la función setNewTask con una función de actualización del estado para actualizar el objeto newTask agregando la propiedad y valor correspondiente.

La función handleNewTaskSubmit se define para enviar la tarea creada al servidor cuando se envía el formulario. Recibe el evento de envío como argumento y utiliza la función preventDefault para evitar que el formulario recargue la página. Luego, realiza una petición HTTP POST a la ruta '/tasks' con los datos de la nueva tarea utilizando axios y actualiza el estado tasks con la respuesta del servidor utilizando la función setTasks. Finalmente, se reinicia el estado newTask a una tarea vacía.

La función handleTaskComplete se define para actualizar una tarea como completada cuando se marca su casilla de verificación. Recibe la tarea como argumento y utiliza axios para realizar una petición HTTP PUT a la ruta /tasks/${task._id} con los datos actualizados de la tarea, que incluyen la propiedad completed establecida en true. Luego, actualiza el estado tasks con la tarea actualizada.

La función handleTaskDelete se define para eliminar una tarea de la lista cuando se hace clic en el botón "Eliminar". Recibe la tarea como argumento y utiliza axios para realizar una petición HTTP DELETE a la ruta /tasks/${task._id} para eliminar la tarea del servidor. Luego, actualiza el estado tasks eliminando la tarea eliminada.

Finalmente, el componente App devuelve una estructura de HTML que contiene un formulario para crear nuevas tareas y una lista de tareas pendientes. El formulario contiene dos campos de entrada para el título y la descripción de la tarea, y un botón "Agregar tarea" que llama a la función handleNewTaskSubmit cuando se hace clic. La lista de tareas muestra cada tarea como un elemento li con una casilla de verificación para marcar la tarea como completada, el título y la descripción de la tarea, y un botón "Eliminar" que llama a la función handleTaskDelete para eliminar la tarea seleccionada de la lista. Cada vez que se completa una tarea, se marca como completada en la base de datos y se actualiza en la lista de tareas en la interfaz de usuario.
