import { Appointment } from "./appointment.model";

export class Doctor {
    private name: string;
    private email: string;
    private password: string;
    private qualifications: string[];
    private expertiseIn: string[];
    private appointments: Appointment[];
    private photoUrl: string;
    private shortBio: string;

    constructor(name: string, email: string, password: string, qualifications: string[], expertiseIn: string[], appointments: Appointment[], photoUrl: string, shortBio: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.qualifications = qualifications;
        this.expertiseIn = expertiseIn;
        this.appointments = appointments;
        this.photoUrl = photoUrl;
        this.shortBio = shortBio;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getQualifications() {
        return this.qualifications.slice();
    }

    getExpertiseIn() {
        return this.expertiseIn.slice();
    }

    getAppointments() {
        return this.appointments.slice();
    }

    getPhotoUrl() {
        return this.photoUrl;
    }

    getShortBio() {
        return this.shortBio;
    }
}