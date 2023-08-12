Feature: API testing
  Scenario: Test menu list
    Given The api is up and running
    When I get list bank
    Then Verify list bank api repsonse correctly with sucess status