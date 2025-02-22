const validation  = require('../../../../controller/validation')

const create_task = (req, res, next)=>{

    let rules = {
        title: "required",
        description: "required",
        status: "required",
        completed_at: "required"
    }
    validation(req.body, rules, (error, status)=>{
        if(!status){
            res.send({message:"Validation faild", status: status, data: error})
        }else{
            next()
        }
    })
}

const update_task = (req, res, next)=>{
    const { id } = req.params;
    const requestBody = req.body;

    //check id
    if (!id) {
        return res.status(400).json({ message: "Task ID is required", status: false });
    }

    //Check if request body
    if (requestBody.length === 0) {
        return res.status(400).json({ message: "Request body cannot be empty", status: false });
    }

    next()
}

module.exports = {
    create_task,
    update_task
}