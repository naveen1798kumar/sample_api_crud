export const ServiceIndex = (req, res)=>{
    res.send('List of services')
}

// export default ServiceIndex

export const ServiceCreate = (req, res)=>{
    // res.send('Create services')
    // id, title, des
    console.log(req.body);
    
    return res.json(req.body)
}

export const ServiceUpdate = (req, res)=>{
    res.send('Update services')
}

export const ServiceDelete = (req, res)=>{
    res.send('Delete services')
}