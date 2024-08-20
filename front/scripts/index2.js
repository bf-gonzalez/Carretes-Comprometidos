class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        this.id++;
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

// convertir actividad en un html
function convertToHTML(activity) {
    const { id, title, description, imgUrl } = activity;

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = description;

    const imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    
 
   /* 
    // Agregar clases CSS
    titleElement.classList.add('title');
    descriptionElement.classList.add('description');
    imageElement.classList.add('image');
*/
    //Agregar tarjeta
    const cardContainer = document.createElement('div');
    cardContainer.id = `tarjet`; 
    cardContainer.appendChild(titleElement);
    cardContainer.appendChild(descriptionElement);
    cardContainer.appendChild(imageElement);

    // Eliminar la tarjeta haciendole click
    cardContainer.addEventListener('click', () => {
        cardContainer.remove();
       
        repository.deleteActivity(id);
    });

    return cardContainer;
}



// Función para agregar una nueva actividad al contenedor
function addActivityToContainer(activity) {
    const container = document.getElementById('agregar_act');
    const activityElement = convertToHTML(activity);
    container.appendChild(activityElement);
}

// Función para convertir todas las instancias de Activity en elementos HTML y agregarlos al contenedor
function convertAllActivitiesToHTML() {
    const container = document.getElementById('agregar_act');
    
    // Vaciar el contenido actual del contenedor
    container.innerHTML = '';

    // Obtener el listado completo de actividades
    const allActivities = repository.getAllActivities();

    // Mapear el listado de actividades para convertirlas en elementos HTML
    const activityElements = allActivities.map(activity => convertToHTML(activity));

    // Appendear todos los elementos HTML al contenedor
    activityElements.forEach(element => {
        container.appendChild(element);
    });
}

// obtener imput y sus valores
function handleButtonClick() {
    const titleInput = document.getElementById('input1');
    const descriptionInput = document.getElementById('caja');
    const imgUrlInput = document.getElementById('input2');
    const title = titleInput.value;
    const description = descriptionInput.value;
    const imgUrl = imgUrlInput.value;

    //verificar que los campos no esten vacios
    if (title === '' || description === '' || imgUrl === '') {
        alert('Por favor complete todos los campos.');
        return;
    }

    
    repository.createActivity(title, description, imgUrl);
    addActivityToContainer(repository.activities[repository.activities.length - 1]);

    
    

    //Vaciar campos despues de agreagar actividad
    titleInput.value = '';
    descriptionInput.value = '';
    imgUrlInput.value = '';
}



//Agregar un Event Listener al botón 
const addButton = document.getElementById('boton');
addButton.addEventListener('click', handleButtonClick);

// instancia de Repository
const repository = new Repository();



// Agregar las actividades existentes al contenedor
repository.activities.forEach(activity => {
    addActivityToContainer(activity);
});

convertAllActivitiesToHTML();



