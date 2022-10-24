const University = require('../models/University');

async function deleteUniversityService(id) {
    try {
        const university = await University.findById(id);

        if (!university) {
            return {
                status: 204,
                result: "University not found."
            }
        };

        await University.deleteOne({ _id: id });

        return {
            status: 200,
            result: "University deleted succesfully."
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = deleteUniversityService;
