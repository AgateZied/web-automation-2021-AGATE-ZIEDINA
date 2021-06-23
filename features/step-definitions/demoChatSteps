import { When, Then} from '@cucumber/cucumber';
import { tests } from '../support/tests';

When("I see that both users enter the nickname", function(){
    tests.DemoChatTest.validateUsersEnterNickName()
})
When("I see that both users connect to broker", function(){
    tests.DemoChatTest.validateUsersConnection()
})
When("I see that both users see themselves and each other in the Connected Users tab", function(){
    tests.DemoChatTest.validatecurrentUser()
})
When("I see that user1 sends any message", function(){
    tests.DemoChatTest.mainUserSendsMessageUser1()
})
When("I see that user2 receives the sent message", function(){
    tests.DemoChatTest.validateMessageInChatUser2()
})
When("I see that user2 sends any message", function(){
    tests.DemoChatTest.mainUserSendsMessageUser2()
})
Then("I see that user1 receives the sent message", function(){
    tests.DemoChatTest.validateMessageInChatUser1()
})
When("I see that both users can disconnect and lose connection", function(){
    tests.DemoChatTest.validateUserDisconnects()
})
