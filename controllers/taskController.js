import Task from "../models/task.js";


export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id});

        res.json({
            success: true,
            data: tasks
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

        const task = await Task.create({ 
            title,
            userId: req.user.id
        })

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
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user.id
        })

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
        const task = await Task.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id
            },
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

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        })

        if(!task){
            return res.status(404).json({ 
                success: false,
                error: "Task not found !!"
            })
        }

        res.json({
            success: true,
            message: "Task deleted."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error"
        })
    }   
}