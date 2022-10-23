const University = require('../models/University')

async function createUniversityService(domains, country, state_province, web_pages, name, alpha_two_code) {
    try {
        if (!domains) { return { message: "The field \'domain\' has to be informed." }}

        if (!country) { return { message: "The field \'country\' has to be informed." } }

        if (!web_pages) { return { message: "The field \'web_pages\' has to be informed." } }

        if (!name) { return { message: "The field \'name\' has to be informed." } }

        if (!alpha_two_code || alpha_two_code.length !== 2) { return { message: "The field \'alpha_two_code\' has to be informed and no more than two characters." } }

        const foundedUniversity = await University.findOne({ name, country })

        if (foundedUniversity) {
            return { message: "This university it's already on our database." }
        }

        const university = {
            domains,
            country,
            state_province,
            web_pages,
            name,
            alpha_two_code: alpha_two_code.toUpperCase()
        }

        return await University.create(university)
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

module.exports = createUniversityService;