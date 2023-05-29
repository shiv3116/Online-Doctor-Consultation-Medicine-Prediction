export class Appointment {
    private date: Date;
    private concern: string;
    private doctorName: string;
    private patientName: string;

    constructor(date: string, concern: string, doctorName: string, patientName: string) {
        this.date = new Date(date);
        this.concern = concern;
        this.doctorName = doctorName;
        this.patientName = patientName;
    }

    getDate() {
        return this.date;
    }

    getConcern() {
        return this.concern;
    }

    getDoctorName() {
        return this.doctorName;
    }

    getPatientName() {
        return this.patientName;
    }
}