let tasks = []
let nextId = 1;

export const getTasks = (req, res) => {
    res.json({
        success: true,
        data: tasks
    });
}

export const createTask =(req, res) => {
    const { title } = req.body

    if(!title) {
        return res.status(400).json({
            message: "Task is required"
        })
    }

    const newTask = {
        id: nextId,
        title,
        completed: false
    }

    tasks.push(newTask)
    nextId++

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    })
}

export const getTaskById = (req, res) => {
    const id = Number(req.params.id)

    const task = tasks.find(task => task.id === id)

    if(!task){
        return res.status(404).json({
            message: "Task not found !!"
        })
    }

    res.json(task);
}

export const updateTask = (req, res) => {
    const id = Number(req.params.id)

    const task = tasks.find(task => task.id === id)

    if(!task){
        return res.status(404).json({
            message: "Task not found !!"
        })
    }

    const { title, completed } = req.body
    
    if(title !== undefined) task.title = title;
    if(completed !== undefined) task.completed = completed;

    res.json({
        message: "Task updated successfully",
        task
    })
}

export const deleteTask = (req, res) => {
    const id = Number(req.params.id)

    const index = tasks.findIndex(task => task.id === id)

    if(index === -1){
        return res.status(404).json({ message: "Task not found !!"})
    }

    const deletedTask = tasks.splice(index, 1)

    res.json({
        message: "Task deleted successfully !!",
        task: deletedTask[0]
    })
}