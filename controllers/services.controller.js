import serviceModel from "../models/services.model.js";

// Reading all services
export const ServiceIndex = async (req, res)=>{
    // res.send('List of services')
    try{
        const services = await serviceModel.find()
        res.status(200).json(services)
    }catch(error){{
        res.status(500).json({
            message: "Error fetching services",
            error: error.message
        })
    }
}
}
// export default ServiceIndex

// Creating a new service
export const ServiceCreate = async (req, res)=>{
    // res.send('Create services')
    // id, title, des
    console.log(req.body);
    
    const newService = new serviceModel({
        title: req.body.title,
        desc: req.body.desc
    })

    try {
        const service = await newService.save()
        return res.status(201).json(service)
    } catch (error) {
        return res.status(400).json({
            message: "Error creating service",
            error: error.message
        })
    }
   
    return res.json(req.body)
}

// Finding a sevice by ID
export const ServiceFindById = async (req, res)=>{
    // res.send('Find a service by ID')
    try {
        const service = await serviceModel.findById(req.params.id)

        if(service == null){
            return res.status(404).json({
                message: "Service not found"
            })
        } else {
            res.json(service)
        }

    } catch (error) {
        return res.status(500).json({
            message: "Error updating service",
            error: error.message
        })
    }
}

// Updating a service
export const ServiceUpdate = async (req, res) => {
    try {
        const service = await serviceModel.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        if (req.body.title != null) {
            service.title = req.body.title;
        }
        if (req.body.desc != null) {
            service.desc = req.body.desc;
        }

        const updatedService = await service.save();
        res.json(updatedService);
    } catch (error) {
        return res.status(400).json({
            message: "Error updating service",
            error: error.message
        });
    }
}

export const ServiceDelete = async (req, res)=>{
    const serviceID = req.params.id
    try {
        const service = await serviceModel.findOne({_id: serviceID});
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        await service.deleteOne();
        res.json({
            message: "Service deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting service",
            error: error.message
        });
    }
}