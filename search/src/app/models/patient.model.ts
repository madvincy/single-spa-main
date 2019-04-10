
export class Patient {

    private patient_uuid: string;

    constructor(patient_uuid?: any) {
        this.patient_uuid = patient_uuid;
      }

    public get uuid(): string {
        return this.uuid;
    }
    public set uuid(v: string) {
        this.uuid = v;
    }
}
