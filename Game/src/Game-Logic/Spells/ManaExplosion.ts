import BODIES from "../../../../Engine/src/components/Models/Bodies";
import { Ball } from "../../../../Engine/src/components/Physical-Body/Ball";
import Matrix from "../../../../Engine/src/Math/Matrix";
import Vector from "../../../../Engine/src/Math/Vector";
import { BallProjectile } from "../../Game-Objects/Attack-types/Projectile/BallProjectile";
import WORLD from "../../World/GlobalWorld";
import { Spell } from "./SpellClass";

export class ManaExplosion extends Spell {

    detonationTime: number

    constructor() {
        super()
        this.duration = 3000
        this.detonationTime = 1000
    }
    cast(dir: Vector) {
        let playrPos = WORLD.player.pos
        let mainProjectile = new BallProjectile(dir, playrPos)

        mainProjectile.friction = 0
        let speed = dir.mult(1000)
        mainProjectile.vel = mainProjectile.vel.add(speed)
        this.projectiles.push(mainProjectile)
        setTimeout(() => {

            for (let radius = 0; radius < 360; radius += 30) {
                let matrix = new Matrix(2, 2)
                matrix.rotMx22(radius)
                let newDir = matrix.multiplyVec(dir)
                let miniProjectile = new BallProjectile(newDir, mainProjectile.pos)

                miniProjectile.friction = 0

                let speed = newDir.mult(500)
                miniProjectile.vel = mainProjectile.vel.add(speed)

                this.projectiles.push(miniProjectile)

            }
            this.setRemove(0, mainProjectile)
            this.setRemove(this.duration, ...this.projectiles)

        }, this.detonationTime)


    }
}
