import  { Camera } from './Camera'

export default class ZhiUE{
    private camera:Camera;

    constructor(id:string){
        this.camera=new Camera(id);
    }

    public getCamera(){
        return this.camera;
    }
}