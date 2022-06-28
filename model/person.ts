export class Person {
    private _id: number = 1;
    private _name: string;
    private _age: number;
    private _country: string;
    private _height: string;
    private _weight: string;
    private _measurements: string;


	constructor(id:number, name: string,age:number, country: string, height: string, weight: string, measurements: string) {
		this._name = name;
		this._country = country;
		this._height = height;
		this._weight = weight;
		this._measurements = measurements;
        this._age = age;
		this._id = id;
	}
   
	public get id(): number  {
		return this._id;
	}

	public get name(): string {
		return this._name;
	}
   
	public get country(): string {
		return this._country;
	}

	public get height(): string {
		return this._height;
	}

	public get weight(): string {
		return this._weight;
	}

	public get measurements(): string {
		return this._measurements;
	}
    get age(): number {
        return this._age;
    }

	public set id(value: number ) {
		this._id = value;
	}

	public set name(value: string) {
		this._name = value;
	}

	public set country(value: string) {
		this._country = value;
	}

	public set height(value: string) {
		this._height = value;
	}

	public set weight(value: string) {
		this._weight = value;
	}

	public set measurements(value: string) {
		this._measurements = value;
	}
    set age(value: number) {
        this._age = value;
    }



}