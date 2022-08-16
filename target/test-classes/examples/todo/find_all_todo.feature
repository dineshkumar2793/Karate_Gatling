Feature: Todos API Tests

  Scenario: Find All Todos
    Given def user = user
    Given url baseUrl + '/users/' + user + '/todos/'
    When method Get
    Then status 200
