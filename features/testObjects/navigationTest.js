import { pages } from "../support/pages";

export class NavigationTest{
  openStartPage(){
      pages.user1.StartPage.openPage()
      pages.user2.StartPage.openPage()
      pages.user1.StartPage.getMainHeader().waitForDisplayed()
     pages.user2.StartPage.getMainHeader().waitForDisplayed()
  }
}