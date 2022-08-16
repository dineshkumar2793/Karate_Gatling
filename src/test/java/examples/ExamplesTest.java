package examples;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import static org.junit.jupiter.api.Assertions.*;

import com.test.karategatlingintegrationexample.KarateGatlingIntegrationExampleApplication;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@Slf4j
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@ContextConfiguration
@ExtendWith({SpringExtension.class, TestSetup.class})
@SpringBootTest(classes = KarateGatlingIntegrationExampleApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ExamplesTest {

    @LocalServerPort
    private int port;

    @BeforeAll
    public void setup() {
        System.setProperty("port", String.valueOf(port));
    }

    @Test
    void testParallel() {
        Results results = Runner.path("classpath:examples")
                //.outputCucumberJson(true)
                .parallel(5);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
