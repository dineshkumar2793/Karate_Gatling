package examples.status;

import com.intuit.karate.junit5.Karate;

class StatusRunner {
    
    @Karate.Test
    Karate testStatus() {
        return Karate.run("status").relativeTo(getClass());
    }    

}
