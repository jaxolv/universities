const University = require('../models/University')

async function updateUniversityService(id, web_pages, name, domains) {
    const university = { web_pages, name, domains }

    try {
        await University.findByIdAndUpdate({
            _id: id
        }, university)

        return university
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

module.exports = updateUniversityService;
