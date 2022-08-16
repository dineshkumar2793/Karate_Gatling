Feature: Todos API Tests

  Scenario: Find a Todo
    Given def user = user
    Given def id = id
    Given url baseUrl + '/users/' + user + '/todos/' + id
    When method Get
    Then status 200
