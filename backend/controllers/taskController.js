// @description - gets all tasks of a user
// @route - GET /api/goals
// @access - Private
const getTasks = (req, res) => {
    res.status(200).json({message: "Get tasks"})
}

// @description - sets a task of a user
// @route - POST /api/goals
// @access - Private
const setTask = (req, res) => {
    res.status(200).json({message: "Set task"})
}

// @description - Update a task of a user
// @route - PUT /api/goals/:id
// @access - Private
const updateTask = (req, res) => {
    res.status(200).json({message: `Update task ${req.params.id}`})
}

// @description - Delete a task of a user
// @route - DELETE /api/goals/:id
// @access - Private
const deleteTask = (req, res) => {
    res.status(200).json({message: `Delete task ${req.params.id}`})
}

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}