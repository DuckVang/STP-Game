import { Viewport } from "pixi-viewport";
import { Container } from "pixi.js"
import BODIES from "../../../Engine/src/components/Models/Bodies"
import COLLISIONS from "../../../Engine/src/components/Models/Collisions";
import { DrawPoint } from "../Render /Shapes";

export function RenderLoop(container: Viewport) {

    container.removeChildren()
    BODIES.forEach((body) => {
        
        
        body.render()
        container.addChild(body.graphics)
        
    })
 
    COLLISIONS.forEach(element => {
        container.addChild(DrawPoint(element.cp))
    });
}