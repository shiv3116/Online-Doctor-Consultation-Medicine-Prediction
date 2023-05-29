import { Appointment } from "./appointment.model";

export class User {
    private name: string;
    private email: string;
    private password: string;
    private appointments: Appointment[];

    constructor(name: string, email: string, password: string, appointments: Appointment[]) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.appointments = appointments;
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
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

    getAppointments() {
        return this.appointments.slice();
    }
}