Feature: Status API Performance Test

  Background: Define URL
    Given url baseUrl
    * def dataGenerator = Java.type('helpers.DataGenerator')

    * def sleep = function(ms) {java.lang.Thread.sleep(ms)}
    * def pause = karate.get('__gatling.pause',sleep)

  Scenario: Get Application User
    Given path '/get/62faae60194d7a50e482b5c7'
    When method Get
    Then status 200


