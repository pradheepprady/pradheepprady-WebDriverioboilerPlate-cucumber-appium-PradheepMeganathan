Feature: Sample feature file to illustrate possible actions can be performed on a splitwise app

  @androidApp
  Scenario: User signup account in splitwise app
    Given I launch the app
    When I click singup button
    When I fill 'pradheep' 'pradheep140693@gmail.com' 'Prady@2022' 'Belgium' '465576170' and 'INR'
    When I click on the done button
    When I swipe through the welcome pages
    Then I should see the "Welcome to Splitwise" messages

  @androidApp
  Scenario Outline: User login to the app and add expenses in a group using splitwise
    Given I launch the app
    When I click login button
    When I enter <userName> and <passWord>
    When I click on login button with credentials
    When I swipe through the welcome page sliders
    When I select <groupName> fo adding expenses
    When I add <amount> euro expenses with description <desc>
    When I navigate to activity screen
    Then I should see my added expenses <desc>

    Examples:
      | userName                | passWord     | groupName      | amount | desc                                 |
      | "pradheepren@gmail.com" | "Prady@2022" | "Test Group"   | "10"   | "lunch"                              |
      | "pradheepren@gmail.com" | "Prady@2022" | "Croatia Trip" | "0.5"  | "dont worrry, i will delete this :P" |

