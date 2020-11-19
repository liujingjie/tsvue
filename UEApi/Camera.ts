export class Camera{
    private _position:string;
    constructor(position:string){
        this._position=position;
    }

    public getPosition(){
        return this._position;
    }
}
