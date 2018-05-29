/// <reference path="../vendor.d.ts"/>

module Main {
    export class DefaultDocumentController {

        private dirty = false;
        private invalid = false;

        constructor(private $scope: any) {

        }

        isDirty(): boolean {
            return this.dirty;
        }

        isInvalid(): boolean {
            return this.invalid;
        }

        setDirty(value: boolean) {
            this.dirty = value;
        }

        setInvalid(value: boolean) {
            this.invalid = value;
        }

        cancel() {
            console.log("cancel");
            this.closeModal();
        }

        close() {
            console.log("Close");
            this.closeModal();
        }

        yes() {
            console.log("Yes");
        }

        no() {
            console.log("No");
        }

        closeModal() {
            this.$scope.$hide();
        }
    }

    export class OpenDocumentController extends DefaultDocumentController {

        constructor($scope: any) {
            super($scope);
        }

        openItem() {
            console.log("Open item");
        }

    }

    export class SaveDocumentController extends DefaultDocumentController {

        constructor($scope: any) {
            super($scope);
        }

        saveItem() {
            console.log("Save item");
        }

    }

    export class DeleteDocumentController extends DefaultDocumentController {

        constructor($scope: any) {
            super($scope);
        }

        deleteItem() {
            console.log("Delete item");
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
