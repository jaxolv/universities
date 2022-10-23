const University = require('../models/University')

async function updateUniversityService(id, web_pages, name, domains) {
    const university = { web_pages, name, domains }

    try {
        if (!web_pages) { return { message: "The field \'web_pages\' has to be informed." } }

        if (!name) { return { message: "The field \'name\' has to be informed." } }

        if (!domains) { return { message: "The field \'domain\' has to be informed." } }

        const universityFounded = await University.findById(id)

        if (!universityFounded) { return { message: "University not found." } }

        await University.updateOne({ _id: id }, university)

        return university
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

module.exports = updateUniversityService;
