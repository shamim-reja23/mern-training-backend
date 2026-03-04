let users = []
let nextId = 1;

export const getUsers = (req, res) => {
    res.json(users);
}

export const createUser = (req, res) => {
    const { name, age } = req.body;

    const newUser = {
        id: nextId,
        name,
        age
    }

    users.push(newUser);
    nextId++;

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    })
}

export const getUserProfile = (req, res) => {
    res.send("User Profile !!")
}

export const getUserById = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({ message: "User not found" })
    }

    res.json(user);
}

export const updateUser = (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);
    
    if(!user){
        return res.status(404).json({ message: "User not found" })
    }   
    
    user.name = req.body.name;
    user.age = req.body.age;

    res.json({
        message: "User updated successfully",
        user
    })
}

export const deleteUser = (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if(index === -1){
        return res.status(404).json({ message: "User not found"})
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser
    })
}