package examples.performance

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

import scala.language.postfixOps

class StatusTest extends Simulation {

  val protocol = karateProtocol()

  val getUser = scenario("Get Application User").exec(karateFeature("classpath:examples/performance/Status.feature"))



  setUp(
    getUser.inject(
        atOnceUsers(1),
        nothingFor(2 seconds),
        constantUsersPerSec(20) during(5 seconds),
        rampUsersPerSec(10) to 50 during(5 seconds)
      ).protocols(protocol),



 )

}
