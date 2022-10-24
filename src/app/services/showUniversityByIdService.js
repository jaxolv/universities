const University = require('../models/University');

async function showUniversityByIdService(id) {
    try {
        const universityFounded = await University.findById(id);

        if (!universityFounded) {
            return {
                status: 400,
                result: "University not founded."
            }
        };

        return {
            status: 200,
            result: universityFounded
        };
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
};

module.exports = showUniversityByIdService;
