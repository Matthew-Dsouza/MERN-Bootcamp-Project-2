const saveChanges () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageUrl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };

    console.log(taskData);
};