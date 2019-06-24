export class Customer {
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    private _contactNo: string;
    public get contactNo(): string {
        return this._contactNo;
    }
    public set contactNo(value: string) {
        this._contactNo = value;
    }

    private _status: boolean;
    public get status(): boolean {
        return this._status;
    }
    public set status(value: boolean) {
        this._status = value;
    }
}
