Feature: Todos API Tests

  Scenario: Update a Todo
    Given def user = user
    Given def id = id
    Given url baseUrl + '/users/' + user + '/todos/' + id
    Given request
      """
        {
            "id": 1,
            "username": "swiss",
            "description": "Learn about Microservices",
            "targetDate": "2022-05-18T08:11:48.242+00:00",
            "done": true
        }
      """
    When method Put
    Then status 200
