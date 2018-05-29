/// <reference path="../vendor.d.ts"/>

module Modal {
    export class DefaultModalButtons {

        private containerCtrl: SwitchContainer = null;
        private mainText: string = null;
        private cancelText: string = null;
        private closeText: string = null;
        private onMainClick: ()=>void = null;
        private onCancelClick: ()=>void = null;
        private onCloseClick: ()=>void = null;
        private invalid: boolean = false;
        private dirty: boolean = false;
        private nextState: string = null;

        constructor(private $scope: any) {

        }

        $onInit = () => {
            if (!this.cancelText) {
                this.cancelText = "Cancel";
            }

            if (!this.closeText) {
                this.closeText = "Close";
            }

            if (!this.onCancelClick) {
                this.onCancelClick = this.onCloseClick;
            }

            if (!this.onCloseClick) {
                this.onCloseClick = this.onCancelClick;
            }
        }

        clickMain() {
            if (this.onMainClick) {
                this.onMainClick();
            }
            this.containerCtrl.setActiveState(this.nextState);
        }

        getMainLabel(): string {
            return this.mainText;
        }

        clickCloseCancel() {
            if (this.dirty) {
                if (this.onCancelClick) {
                    this.onCancelClick();
                }
            } else {
                if (this.onCloseClick) {
                    this.onCloseClick();
                }
            }
        }

        getCloseCancelLabel(): string {
            return this.dirty ? this.cancelText : this.closeText;
        }

        isMainButtonEnabled(): boolean {
            return !this.invalid && this.dirty;
        }

    }
}

angular.module("app").component("defaultModalButtons", {
    require: {
      containerCtrl: "^switchContainer"
    },
    bindings: {
        mainText: "@",
        cancelText: "@?",
        closeText: "@?",
        onMainClick: "&",
        onCancelClick: "&?",
        onCloseClick: "&?",
        dirty: "<",
        invalid: "<",
        nextState: "@"
    },
    templateUrl: "app/modal/DefaultModalButtons.html",
    controller: Modal.DefaultModalButtons,
    controllerAs: "defaultModalButtonsCtrl"

});
