Feature: Login

Scenario: User able to login into the website successfully with fixture file data
    Given Launch the browser
    When I input username and password
    Then Homepage is displayed correctly
    And Close browser

Scenario Outline: User able to login into the website successfully with dynamic data
    Given Launch the browser
    When I input "<username>" and "<password>"
    Then Homepage is displayed correctly
    And Close browser
    Examples:
    |username|password|
    |0876543211|123321|