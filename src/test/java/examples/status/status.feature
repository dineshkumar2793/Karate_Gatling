Feature: App Status API Tests

  Scenario: Get Application Status
    Given url baseUrl + '/status'
    When method Get
    Then status 200

