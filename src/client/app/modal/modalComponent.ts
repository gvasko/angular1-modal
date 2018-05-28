/// <reference path="../vendor.d.ts"/>

module Modal {
    export class ModalComponent {

        constructor() {

        }

    }
}

angular.module("app").component("modalComponent", {
    bindings: {
        title: "@",
        content: "@",
        onClose: "&"
    },
    templateUrl: "app/modal/ModalComponent.html",
    controller: Modal.ModalComponent

});
