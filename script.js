// stores the card container element inside a variable
const taskContainer = document.querySelector(".task-container");

// creates a function which destructures the object and provides it's values inside the template literal code
const newCard = ({
    id,
    imageUrl,
    taskTitle,
    taskType,
    taskDescription,
}) => `<div class="col-md-6 col-lg-4 mb-3" id=${id}>
<div class="card">
    <div
        class="card-header d-flex justify-content-end gap-2"
    >
        <button
            type="button"
            class="btn btn-outline-success"
        >
            <i class="fas fa-edit"></i>
        </button>
        <button
            type="button"
            class="btn btn-outline-danger"
        >
            <i class="fas fa-trash"></i>
        </button>
    </div>
    <div class="card-body">
        <img
        src=${imageUrl}
            class="card-img-top rounded mb-2"
            alt="card image"
        />
        <h5 class="card-title">${taskTitle}</h5>
        <p class="card-text">
            ${taskDescription}
        </p>
        <span class="badge bg-primary">${taskType}</span>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
</div>
</div>`;

const saveChanges = () => {
    
    // created an object to store the task-card data
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };

    // created a variable to call the function & pass the object as argument
    const createNewCard = newCard(taskData);

    // called the task-container to insert the html used to create cards and specify the position & function to be used to create the cards
    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
};
