/// <reference path="../vendor.d.ts"/>

module Modal {
    export class SwitchSection {

        private ifState: string = "";
        private containerCtrl: SwitchContainer = null;

        constructor() {

        }

        $onInit = () => {
            this.containerCtrl.validateState(this.ifState);
        }

        getActiveState(): string {
            return this.containerCtrl.getActiveState();
        }

        setActiveState(newState: string) {
            this.containerCtrl.setActiveState(newState);
        }
    }
}

angular.module("app").component("switchSection", {
    require: {
      containerCtrl: "^switchContainer"
    },
    bindings: {
        ifState: "@"
    },
    templateUrl: "app/modal/SwitchSection.html",
    transclude: true,
    controller: Modal.SwitchSection,
    controllerAs: "switchSectionCtrl"

});
