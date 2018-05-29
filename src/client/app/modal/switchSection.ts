/// <reference path="../vendor.d.ts"/>

module Modal {
    export class SwitchSection {

        private ifState: string = "";
        private containerCtrl: SwitchContainer = null;

        constructor() {

        }

        $onInit = () => {
            console.log("if-state=" + this.ifState);
        }

        setActiveState = (newState: string) => {
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
    controller: Modal.SwitchSection

});
