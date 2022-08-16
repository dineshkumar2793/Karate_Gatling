Feature: Todo API Performance Test

  Background: Define URL
    Given url baseUrl
    * def dataGenerator = Java.type('helpers.DataGenerator')

    * def sleep = function(ms) {java.lang.Thread.sleep(ms)}
    * def pause = karate.get('__gatling.pause',sleep)


  Scenario: Find All Todo
    Given def user = user
    Given url baseUrl + '/users/' + user + '/todos/'
    When method Get
    Then status 200

