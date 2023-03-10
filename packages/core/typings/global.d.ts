
export {}
declare global{
    interface Window { 
        mozRequestAnimationFrame(callback: FrameRequestCallback):void
        webkitRequestAnimationFrame(callback: FrameRequestCallback):void
        msRequestAnimationFrame(callback: FrameRequestCallback):void
    }
    interface WheelEvent{
        wheelDeltaY:number
    }
}