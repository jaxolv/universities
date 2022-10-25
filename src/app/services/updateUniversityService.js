const University = require('../models/University');

async function updateUniversityService(id, web_pages, name, domains) {
    const university = { web_pages, name, domains };

    try {
        if (!web_pages) {
            return {
                status: 406,
                result: "The field \'web_pages\' has to be informed."
            }
        };

        if (!name) {
            return {
                status: 406,
                result: "The field \'name\' has to be informed."
            }
        };

        if (!domains) {
            return {
                status: 406,
                result: "The field \'domain\' has to be informed."
            }
        };

        const universityFounded = await University.findById(id);

        if (!universityFounded) {
            return {
                status: 400,
                result: "University not found."
            }
        };

        await University.updateOne({ _id: id }, university);

        return {
            status: 200,
            result: "The university was updated."
        };
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
};

module.exports = updateUniversityService;
