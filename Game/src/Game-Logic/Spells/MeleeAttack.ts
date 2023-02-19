import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Vector from "../../../../Engine/src/Math/Vector";
import { BoxZone } from "../../Game-Objects/Attack-Types/ForceField/BoxZone";
import { BallProjectile } from "../../Game-Objects/Attack-Types/Projectile/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class MeleeAttack extends Spell {


    zone: BoxZone
    constructor() {
        super()
        this.duration = 1000
    }
    cast(dir: Vector) {
        let playrPos = WORLD.player.pos
        this.zone= new BoxZone(dir, playrPos, this)

   
   
        

       
        this.setRemove(this.duration, this.zone)
    }


}