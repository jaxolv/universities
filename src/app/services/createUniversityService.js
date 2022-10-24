const University = require('../models/University');

async function createUniversityService(domains, country, state_province, web_pages, name, alpha_two_code) {
    try {
        if (!domains) {
            return {
                status: 406,
                result: "The field \'domain\' has to be informed."
            }
        };

        if (!country) {
            return {
                status: 406,
                result: "The field \'country\' has to be informed."
            }
        };

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

        if (!alpha_two_code || alpha_two_code.length !== 2) {
            return {
                status: 406,
                result: "The field \'alpha_two_code\' has to be informed and no more than two characters."
            }
        };

        const foundUniversity = await University.findOne({ name, country, 'state-province': state_province });

        if (foundUniversity) {
            return {
                status: 400,
                result: "This university it's already on our database."
            }
        };

        const university = {
            domains: domains,
            country: country,
            'state-province': state_province,
            web_pages: web_pages,
            name: name,
            alpha_two_code: alpha_two_code.toUpperCase()
        };

        const universityCreated = await University.create(university);

        return {
            status: 201,
            result: universityCreated
        }
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
};

module.exports = createUniversityService;