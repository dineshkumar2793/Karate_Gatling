Feature: Todos API Tests

  Scenario: Delete a Todo
    Given def user = user
    Given def id = deleteId
    Given url baseUrl + '/users/' + user + '/todos/' + id
    When method Delete
    Then status 204
