/// <reference path="../vendor.d.ts"/>

module Modal {
    export class DocumentChooser {

        private onDirtyChange: (newValue: any)=>void = null;
        private onValidation: (newValue: any)=>void = null;

        public documentNameField: string = null;

        constructor(private $scope: any) {

        }

        $onInit = () => {
            this.$scope.$watch("documentChooser.$dirty", (newValue: boolean) => {
               if (this.onDirtyChange) {
                   this.onDirtyChange({ dirty: newValue});
               }
            });

            this.$scope.$watch("documentChooser.$invalid", (newValue: boolean) => {
               if (this.onValidation) {
                   this.onValidation({ invalid: newValue});
               }
            });
        }

    }
}

angular.module("app").component("documentChooser", {
    bindings: {
        onDirtyChange: "&",
        onValidation: "&"
    },
    templateUrl: "app/modal/DocumentChooser.html",
    controller: Modal.DocumentChooser,
    controllerAs: "documentChooserCtrl"

});
