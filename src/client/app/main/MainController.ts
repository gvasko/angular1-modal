/// <reference path="../vendor.d.ts"/>

module Main {
    export class MainController {
        private openModal: mgcrea.ngStrap.modal.IModal;
        private saveModal: mgcrea.ngStrap.modal.IModal;
        private deleteModal: mgcrea.ngStrap.modal.IModal;

        constructor(private $scope: any, private $modal: mgcrea.ngStrap.modal.IModalService) {
            this.openModal = $modal({templateUrl: 'app/view/OpenDocument.html', show: false});
            this.saveModal = $modal({templateUrl: 'app/view/SaveDocument.html', show: false});
            this.deleteModal = $modal({templateUrl: 'app/view/DeleteDocument.html', show: false});
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
