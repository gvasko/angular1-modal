/// <reference path="../vendor.d.ts"/>

module Modal {
    export class ModalComponent {

        constructor() {

        }

    }
}

angular.module("app").component("modalComponent", {
    bindings: {
        onClose: "&"
    },
    templateUrl: "app/modal/ModalComponent.html",
    transclude: {
      "title": "modalTitle",
      "body": "modalBody",
      "footer": "modalFooter"
    },
    controller: Modal.ModalComponent,
    controllerAs: "modalCtrl"

});
