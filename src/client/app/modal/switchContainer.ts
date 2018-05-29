/// <reference path="../vendor.d.ts"/>

module Modal {
    export class SwitchContainer {

        private states: string[] = [];
        private activeState: string = "";
        private initialState: string = "";

        constructor() {

        }

        $onInit = () => {
            console.log("initial state=" + this.initialState);
            this.activeState = this.initialState;
        }

        getActiveState(): string {
            return this.activeState;
        }

        setActiveState(newState: string) {
            this.validateState(newState);
            this.activeState = newState;
        }

        validateState(state: string) {
            if (this.states.indexOf(state) === -1) {
                throw "Invalid state: " + state;
            }
        }

        resetState() {
            this.activeState = this.initialState;
        }
    }
}

angular.module("app").component("switchContainer", {
    bindings: {
        states: "<",
        initialState: "@"
    },
    templateUrl: "app/modal/SwitchContainer.html",
    transclude: true,
    controller: Modal.SwitchContainer,
    controllerAs: "switchContainerCtrl"

});
