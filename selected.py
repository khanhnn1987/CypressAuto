import os

def selectTestSuiteToRun():
    TestSuiteName = input("Please input test suite: ");
    print('npx cypress run  --spec "cypress/e2e/3-my-testing/*.cy.js"')
    os.system('npx cypress run  --spec "cypress/e2e/3-my-testing/*.cy.js"')

def main():
    selectTestSuiteToRun();

main()