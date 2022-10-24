const University = require('../models/University');

async function showUniversityByIdService(id) {
    try {
        const universityFounded = await University.findById(id);

        if (!universityFounded) {
            return { message: "University not founded."}
        };

        return universityFounded;
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
};

module.exports = showUniversityByIdService;
