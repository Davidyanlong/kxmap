import { DEBUG } from "./constant";

type handleType = {
  click?: ((x: number, y: number) => void)[];
  pan?: ((x: number, y: number) => void)[];
  zoom?: ((delta: number, x: number, y: number) => void)[];
};
type PointType = { x: number; y: number } | null;
// 默认事件
const evnetNames = [
  // 0
  "mousedown",
  // 1
  "click",
  // 2
  "mouseup",
  // 3
  "mousemove",
  // 4
  /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel",
  // 5
  "dblclick",
];
// 默认事件函数
const eventFns = (pos: PointType, handlers: handleType,el:HTMLElement) => [
  // 0 mousedown
  (ev: MouseEvent) => {
    pos = { x: ev.pageX, y: ev.pageY };
    if (DEBUG) console.log("mousedown", pos);
  },
  // 1 click
  (ev: MouseEvent) => {
    if (handlers.click) {
      var x = ev.pageX,
      y = ev.pageY;
      var rect = el.getBoundingClientRect();
      for (var i = 0; i < handlers.click.length; i++) {
          handlers.click[i](x - rect.left, y - rect.left);
      }
  }
  },
  // 2 mouseup
  () => {
    pos = null;
  },
  // 3 mousemove
  (ev: MouseEvent) => {
    // 按下鼠标，pos为鼠标按下的位置
    if (pos && handlers.pan) {
      var dx = ev.pageX - pos.x,
          dy = ev.pageY - pos.y;
           // 调用所有的pan 事件
      for (var i = 0; i < handlers.pan.length; i++) {
          handlers.pan[i](dx, dy);
      }
      pos = { x: ev.pageX, y: ev.pageY };
  }
  },
  // 4 mousewheel
  (ev: Event) => {
    
    // 定义了zoom 事件
    if (handlers.zoom) {
      var x = (ev as MouseEvent).pageX,
      y = (ev as MouseEvent).pageY;
      var delta =
      (ev as WheelEvent).wheelDeltaY || (ev as WheelEvent).detail * -120;
      var rect = el.getBoundingClientRect();
      for (var i = 0; i < handlers.zoom.length; i++) {
          handlers.zoom[i](delta, x - rect.left, y - rect.top);
      }
  }
    ev.preventDefault();
  },
  // 5 dblclick
  (ev: MouseEvent) => {
    // 定义了zoom 事件
    if (handlers.zoom) {
      var x = ev.pageX ,
        y = ev.pageY;
        var rect = el.getBoundingClientRect();
       // 调用所有的zoom 事件，每次放大500
      for (var i = 0; i < handlers.zoom.length; i++) {
        handlers.zoom[i](500, x - rect.left, y - rect.top);
      }
    }
    ev.preventDefault();
  },
];

/**
 * 地图相关事件
 */
class Interaction {
  handlers: handleType;
  private _eventsFunction: any;
  private _el: HTMLElement;

  constructor(el: HTMLElement) {
    const handlers: handleType = (this.handlers = {});
    let pos: { x: number; y: number } | null = null;
    this._eventsFunction = eventFns(pos, this.handlers,el);
    this._el = el;
    for (let i = evnetNames.length - 1; i >= 0; i--) {
      let eventName = evnetNames[i] as keyof HTMLElementEventMap;
      let eventFn = this._eventsFunction[i] as (
        this: HTMLElement,
        ev: Event
      ) => any;
      el.addEventListener(eventName, eventFn, false);
    }
  }
  on(ev: keyof handleType, fn: (...args: any[]) => void) {
    if (!this.handlers[ev]) {
      this.handlers[ev] = [];
    }
    this.handlers[ev]?.push(fn);
    return this;
  }
  destroyed() {
    for (let i = evnetNames.length - 1; i >= 0; i--) {
      let eventName = evnetNames[i] as keyof HTMLElementEventMap;
      let eventFn = this._eventsFunction[i][i] as (
        this: HTMLElement,
        ev: Event
      ) => any;
      this._el.removeEventListener(eventName, eventFn, false);
    }
  }
}

export default Interaction;
