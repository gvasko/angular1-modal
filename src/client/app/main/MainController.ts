/// <reference path="../vendor.d.ts"/>

module Main {
    export class MainController {
        private openModal: mgcrea.ngStrap.modal.IModal;

        constructor(private $scope: any, private $modal: mgcrea.ngStrap.modal.IModalService) {
            this.openModal = $modal({templateUrl: 'app/view/OpenDocument.html', show: false});
        }

        createOpenDocumentDialog() {
            this.openModal.$promise.then(this.openModal.show);
        }

        createSaveDocumentDialog() {
            console.log("Save");
        }

        createDeleteDocumentDialog() {
            console.log("Delete");
        }

    }
}

angular.module("app").controller("MainController", ["$scope", "$modal", Main.MainController]);
