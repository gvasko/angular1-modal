/// <reference path="../vendor.d.ts"/>

module Main {
    export class MainController {
        constructor(private $scope: any) {

        }

        createOpenDocumentDialog() {
            console.log("Open");
        }

        createSaveDocumentDialog() {
            console.log("Save");
        }

        createDeleteDocumentDialog() {
            console.log("Delete");
        }

    }
}

angular.module("app").controller("MainController", ["$scope", Main.MainController]);
