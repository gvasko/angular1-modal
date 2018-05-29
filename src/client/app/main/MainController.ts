/// <reference path="../vendor.d.ts"/>

module Main {
    export class MainController {
        private openModal: mgcrea.ngStrap.modal.IModal;
        private saveModal: mgcrea.ngStrap.modal.IModal;
        private deleteModal: mgcrea.ngStrap.modal.IModal;

        constructor(private $scope: any, private $modal: mgcrea.ngStrap.modal.IModalService) {

            const openCtrl = ($scope: any) => {
                $scope.openItem = () => {
                    console.log("Open item");
                };
                $scope.yes = () => {
                    console.log("Yes");
                };
                $scope.no = () => {
                    console.log("No");
                };
            };
            this.openModal = $modal({controller: openCtrl, templateUrl: "app/view/OpenDocument.html", show: false});

            const saveCtrl = ($scope: any) => {
                $scope.saveItem = () => {
                    console.log("Save item");
                };
                $scope.yes = () => {
                    console.log("Yes");
                };
                $scope.no = () => {
                    console.log("No");
                };
            };
            this.saveModal = $modal({controller: saveCtrl, templateUrl: "app/view/SaveDocument.html", show: false});

            const deleteCtrl = ($scope: any) => {
                $scope.deleteItem = () => {
                    console.log("Delete item");
                };
                $scope.yes = () => {
                    console.log("Yes");
                };
                $scope.no = () => {
                    console.log("No");
                };
            };
            this.deleteModal = $modal({controller: deleteCtrl, templateUrl: "app/view/DeleteDocument.html", show: false});
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
