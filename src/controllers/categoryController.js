exports.create = async (req, res) => {
    res.status(200).json({status:'Success',data:"Created"})
 };


exports.read = async (req, res) => { 
    res.status(200).json({status:'Success',data:"data read successfully"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:'Success',data:"Deleted Successfully"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:'Success',data:"Updated successfully"})
};