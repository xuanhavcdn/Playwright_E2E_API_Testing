1. Install extension: Playwright Test for VSCode
2. Click ctrl + Shift + P to "install Playwright"
3. Instal extension Cucumber flugin (delete tests and tests example folder, delete playwright.config.js)
4. Install dependency:
    - npm i @cucumber/cucumber -D
    - npm i ts-node -D
5. Create folder for: step, feature, pages, fixture folder
6. Insert cucumber.json and config
{
    "default": {
        "formatOptions":{
            "snippetInterface": "async-await"
        },
        "paths": ["src/test/features"],
        "publishQuite": true,
        "dryRun": true,
        "require": [
            "src/test/steps/*.ts"
        ],
        "requireModule": ["ts-node/register"]
    }
}
Note: need clear caches after config done:
 - npm cache clean --force
7. Config settings page: Command + "," and edit seting.json of cucumber
    "cucumber.features": [
        "src/test/features/*.feature"
    ],
    "cucumber.glue": [
       "src/test/steps/*.ts"
    ]

8. Run test file
npm run test
9. Run with @tag:
test:specific scenario: cucumber-js --tags @api