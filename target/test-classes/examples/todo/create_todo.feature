Feature: Todos API Tests

  Scenario: Add a new Todo
    Given def user = user
    Given url baseUrl + '/users/' + user + '/todos/'
    Given request
      """
        {
            "username": "swiss",
            "description": "Learn about Microservices",
            "targetDate": "2022-05-18T08:11:48.242+00:00",
            "done": false
        }
      """
    When method Post
    Then status 200
