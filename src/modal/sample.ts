module Example {
    export interface IModal {
        close(): void;
    }
    
    export class OpenProjectModal implements IModal {
        close(): void {
            // 
        }
    }
}