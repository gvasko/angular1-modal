/// <reference path="../vendor.d.ts"/>

module Modal {
    export class YesNoButtons {

        private containerCtrl: SwitchContainer = null;
        private yesText: string = null;
        private noText: string = null;
        private onYesClick: ()=>void = null;
        private onNoClick: ()=>void = null;
        private nextState: string = null;

        constructor() {

        }

        $onInit = () => {
            if (!this.yesText) {
                this.yesText = "Yes";
            }

            if (!this.noText) {
                this.noText = "No";
            }
        }

        clickYes() {
            if (this.nextState) {
                this.containerCtrl.setActiveState(this.nextState);
            } else {
                this.containerCtrl.resetState();
            }

            if (this.onYesClick) {
                this.onYesClick();
            }
        }

        clickNo() {
            this.containerCtrl.resetState();
            if (this.onNoClick) {
                this.onNoClick();
            }
        }

    }
}

angular.module("app").component("yesNoButtons", {
    require: {
      containerCtrl: "^switchContainer"
    },
    bindings: {
        yesText: "@?",
        noText: "@?",
        onYesClick: "&?",
        onNoClick: "&?",
        nextState: "@?"
    },
    templateUrl: "app/modal/YesNoButtons.html",
    controller: Modal.YesNoButtons,
    controllerAs: "yesNoButtonsCtrl"

});
