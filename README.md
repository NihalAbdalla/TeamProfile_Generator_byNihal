# TeamProfile_Generator_byNihal

since i can't record heres is the Walkthrough i did for the assigment 'step-by'step'

Start with Opening the create the Main folder and package json steps as follow, initials starting with:

    package name: (main)
    version: (1.0.0)
    description: This is to create a team profile generator for assigment OOP
    entry point: (index.js)
    test command:
    git repository: https://github.com/NihalAbdalla/TeamProfile_Generator_byNihal
    keywords:
    author: Nihal Abdalla
    license: (ISC)
    About to write to /Users/nihalabdalla/Documents/2. Projects-repos-osu/TeamProfile_Generator_byNihal/Main/package.json:

    {
    "name": "main",
    "version": "1.0.0",
    "description": "This is to create a team profile generator for assigment OOP",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/NihalAbdalla/TeamProfile_Generator_byNihal.git"
    },
    "author": "Nihal Abdalla",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/NihalAbdalla/TeamProfile_Generator_byNihal/issues"
    },
    "homepage": "https://github.com/NihalAbdalla/TeamProfile_Generator_byNihal#readme"
    };

Install an NPM external module: npm install jest from [Jest](https://www.npmjs.com/package/jest)

aslo npm install inquirer [Inquirer](https://www.npmjs.com/package/inquirer)

Create a directory as follows:

```md
**tests**/ // jest tests
Employee.test.js
Engineer.test.js
Intern.test.js
Manager.test.js
dist/ // rendered output (HTML) and CSS style sheet
lib/ // classes
src/ // template helper code
index.js // runs the application
```

Add inquirer Q&A structure index.js

installed bootstrap by running npm install bootstrap
installed fontAwesome by running npm install --save @fortawesome/fontawesome-free
