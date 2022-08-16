package examples.todo;

import com.intuit.karate.junit5.Karate;

class TodosRunner {
    
    @Karate.Test
    Karate testTodo() {
        return Karate.run().relativeTo(getClass());
    }

}
