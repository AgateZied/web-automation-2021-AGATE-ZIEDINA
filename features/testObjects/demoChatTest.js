import { pages } from "../support/pages";
let userNickname

export class DemoChatTest{
    validateUsersEnterNickName(){
        pages.user1.StartPage.getNickNameInput().setValue('user1');
        pages.user1.StartPage.getConnectButton().click()
        pages.user2.StartPage.getNickNameInput().setValue('user2');
        pages.user2.StartPage.getConnectButton().click()
    }
    validateUsersConnection(){
        pages.user1.StartPage.getConnectionSuccess().waitForDisplayed()
        pages.user2.StartPage.getConnectionSuccess().waitForDisplayed()
    }
    validatecurrentUser(){
        pages.user1.StartPage.getLoggedUserInInformation().waitForDisplayed()
        pages.user1.StartPage.getConnectedUserInInformation().waitForDisplayed()
        pages.user2.StartPage.getLoggedUserInInformation().waitForDisplayed()
        pages.user2.StartPage.getConnectedUserInInformation().waitForDisplayed()
    }
    mainUserSendsMessageUser1(){
        pages.user1.StartPage.getMessageText().setValue('hello from user1');
        pages.user1.StartPage.getReplyButton().click()
    }
    mainUserSendsMessageUser2(){
        pages.user2.StartPage.getMessageText().setValue('hello from user2');
        pages.user2.StartPage.getReplyButton().click()
    }
    validateMessageInChatUser2(){
        pages.user2.StartPage.getMessageInChat().waitForDisplayed()
    }
    validateMessageInChatUser1(){
        pages.user1.StartPage.getMessageInChat().waitForDisplayed()
    }
    validateUserDisconnects(){
        pages.user1.StartPage.getDisconnectButton().click()
        pages.user2.StartPage.getDisconnectButton().click()
    }
}
