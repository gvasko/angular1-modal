/// <reference path="../vendor.d.ts"/>

module Main {
    export class OpenDocumentController {

        openItem() {
            console.log("Open item");
        }

        yes() {
            console.log("Yes");
        }

        no() {
            console.log("No");
        }
    }

    export class SaveDocumentController {

        saveItem() {
            console.log("Save item");
        }

        yes() {
            console.log("Yes");
        }

        no() {
            console.log("No");
        }
    }

    export class DeleteDocumentController {

        deleteItem() {
            console.log("Delete item");
        }

        yes() {
            console.log("Yes");
        }

        no() {
            console.log("No");
        }
    }

    export class MainController {
        private openModal: mgcrea.ngStrap.modal.IModal;
        private saveModal: mgcrea.ngStrap.modal.IModal;
        private deleteModal: mgcrea.ngStrap.modal.IModal;

        constructor(private $scope: any, private $modal: mgcrea.ngStrap.modal.IModalService) {

            this.openModal = $modal({controller: OpenDocumentController, controllerAs: "openCtrl", templateUrl: "app/view/OpenDocument.html", show: false});

            this.saveModal = $modal({controller: SaveDocumentController, controllerAs: "saveCtrl", templateUrl: "app/view/SaveDocument.html", show: false});

            this.deleteModal = $modal({controller: DeleteDocumentController, controllerAs: "deleteCtrl", templateUrl: "app/view/DeleteDocument.html", show: false});
        }

        createOpenDocumentDialog() {
            this.openModal.$promise.then(this.openModal.show);
        }

        createSaveDocumentDialog() {
            this.saveModal.$promise.then(this.saveModal.show);
        }

        createDeleteDocumentDialog() {
            this.deleteModal.$promise.then(this.deleteModal.show);
        }

    }
}

angular.module("app").controller("MainController", ["$scope", "$modal", Main.MainController]);
