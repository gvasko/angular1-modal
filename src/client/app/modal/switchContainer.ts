/// <reference path="../vendor.d.ts"/>

module Modal {
    export class SwitchContainer {

        private states: string[] = [];
        private activeState: string = "";

        constructor() {

        }

        $onInit = () => {
            console.log("initial state=" + this.activeState);
        }

        getActiveState(): string {
            return this.activeState;
        }

        setActiveState(newState: string) {
            if (this.states.indexOf(newState) === -1) {
                throw "Invalid state: " + newState;
            }
            this.activeState = newState;
        }
    }
}

angular.module("app").component("switchContainer", {
    bindings: {
        states: "<",
        activeState: "@"
    },
    templateUrl: "app/modal/SwitchContainer.html",
    transclude: true,
    controller: Modal.SwitchContainer,
    controllerAs: "switchContainerCtrl"

});
