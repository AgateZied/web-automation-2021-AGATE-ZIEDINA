
import { Page } from "./basePage";

export class StartPage extends Page {
    getmainHeader(){
        return this.browser.$('#container.p-2.mh-100 > a > img.img-fluid.mb-2')
    }
    getNickNameInput(){
        return this.browser.$('#user.form-control')
    }
    getConnectButton(){
        return this.browser.$('#connectBtn.btn.btn-primary')
    }
    getConnectionSuccess(){
        return this.browser.$('#text-success')
    }
    getLoggedUserInInformation(){
        return this.browser.$('#list-group-item.p-1.border-0.loggedUser')
    }
    getConnectedUserInInformation(){
        return this.browser.$('#list-group-item.p-1.border-0.text-primary')
    }
    getMessageText(){
        return this.browser.$('#sendMessage.form-control')
    }
    getReplyButton(){
        return this.browser.$('#replyBtn.btn.btn-outline-primary')
    }
    getMessageInChat(){
        return this.browser.$('#text-primary')
    }
    getDisconnectButton() {
        return this.$('#disconnectBtn.btn.btn-secondary')
    }
    openPage(){
        this.browser.url('https://demos.mqtt.cool/chat/')
    }
}