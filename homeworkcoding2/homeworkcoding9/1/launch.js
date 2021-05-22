class launch{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.1,
            length:10

        }
        this.pointB=pointB
        
        this.launch=Constraint.create(options)
        World.add(world,this.launch)

    }
    display(){
       if(this.launch.bodyA){
        var body1=this.launch.bodyA.position
        var point2= this.pointB
        line (body1.x,body1.y,point2.x,point2.y)
       }
    }
    fly(){
        this.launch.bodyA=null
    }
    attach(bodyx){
        this.launch.bodyA=bodyx
    }
}