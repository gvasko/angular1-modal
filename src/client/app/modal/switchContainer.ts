/// <reference path="../vendor.d.ts"/>

module Modal {
    export class SwitchContainer {

        private states: string[] = [];
        private activeState: string = "";

        constructor() {

        }

        $onInit = () => {
            console.log("active state=" + this.activeState);
        }

        setActiveState = (newState: string) => {
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
    controller: Modal.SwitchContainer

});
