import Task from "../models/task.js";


export const getTasks = async (req, res) => {
    try {
        const task = await Task.find();

        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

export const createTask = async (req, res) => {
    try {
        const { title } = req.body

        if(!title) {
            return res.status(400).json({
                success: false,
                error: "Title is required"
            })
        }

        const task = await Task.create({ title })

        res.status(201).json({
            success: true,
            data: task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
    
}

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        if(!task){
            return res.status(404).json({
                success: false,
                message: "Task not found !!"
            })
        }

        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
    
        if(!task){
            return res.status(404).json({
                success: false,
                error: "Task not found !!"
            })
        }
    
        res.json({
            success: true,
            data: task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error"
        })
    }
   
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