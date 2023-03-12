type handleType = {
  click?: ((x: number, y: number) => void)[];
  pan?: ((x: number, y: number) => void)[];
  zoom?: ((delta: number, x: number, y: number) => void)[];
  resize?: (() => void)[];
  rotate?: ((a: number[], v: number[]) => void)[];
};
type PointType = { x: number; y: number } | null;
// 默认事件
const evnetNames = [
  // 0
  'mousedown',
  // 1
  'click',
  // 2
  ['mouseup', document],
  // 3
  ['mousemove', document],
  // 4
  /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel',
  // 5
  'dblclick',
  // 6
  ['resize', window],
  // 7
  ['keydown', document],
  //8
  ['keyup', document],
];
// 默认事件函数
const eventFns = (pos: PointType, handlers: handleType, el: HTMLElement, rotationKey: boolean, rotating: boolean) => {
  function zoom(delta: number, x: number, y: number) {
    if (handlers.zoom) {
      var left = el.offsetLeft,
        top = el.offsetTop;
      for (var i = 0; i < handlers.zoom.length; i++) {
        handlers.zoom[i](delta, x - left, y - top);
      }
    }
  }

  function click(x: number, y: number) {
    if (handlers.click) {
      var left = el.offsetLeft,
        top = el.offsetTop;
      for (var i = 0; i < handlers.click.length; i++) {
        handlers.click[i](x - left, y - left);
      }
    }
  }

  function pan(x: number, y: number) {
    if (pos && handlers.pan) {
      for (var i = 0; i < handlers.pan.length; i++) {
        handlers.pan[i](x - pos.x, y - pos.y);
      }
      pos = { x: x, y: y };
    }
  }

  function resize() {
    if (handlers.resize) {
      for (var i = 0; i < handlers.resize.length; i++) {
        handlers.resize[i]();
      }
    }
  }

  function rotate(x: number, y: number) {
    if (pos && handlers.rotate) {
      for (var i = 0; i < handlers.rotate.length; i++) {
        handlers.rotate[i]([x, y], [pos.x, pos.y]);
      }
      pos = { x: x, y: y };
    }
  }

  return [
    // 0 mousedown
    (ev: MouseEvent) => {
      if (!rotationKey) {
        rotating = false;
      }
      pos = { x: ev.pageX, y: ev.pageY };
    },
    // 1 click
    (ev: MouseEvent) => {
      click(ev.pageX, ev.pageY);
    },
    // 2 mouseup
    () => {
      if (!rotationKey) {
        rotating = false;
      }
      pos = null;
    },
    // 3 mousemove
    (ev: MouseEvent) => {
      if (rotating) {
        rotate(ev.pageX, ev.pageY);
      } else {
        pan(ev.pageX, ev.pageY);
      }
    },
    // 4 mousewheel zoom
    (ev: Event) => {
      // 定义了zoom 事件
      zoom((ev as WheelEvent).wheelDeltaY || ((ev as WheelEvent).detail * -120), (ev as MouseEvent).pageX, (ev as MouseEvent).pageY);
      ev.preventDefault();
    },
    // 5 dblclick
    (ev: MouseEvent) => {
      // 定义了zoom 事件
      zoom(Infinity, ev.pageX, ev.pageY);
      ev.preventDefault();
    },
    // 6 resize
    () => resize,
    // 7 keydown
    (ev: KeyboardEvent) => {
      console.log('ev.key', ev.key);
      if (ev.key == '1') {
        rotating = rotationKey = true;
      }
    },
    // 8 keyup
    (ev: KeyboardEvent) => {
      if (ev.key == '1') {
        rotationKey = false;
      }
    },
  ];
};

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

    let rotationKey = false;
    let rotating = false;

    this._eventsFunction = eventFns(pos, this.handlers, el, rotationKey, rotating);
    this._el = el;
    for (let i = evnetNames.length - 1; i >= 0; i--) {
      let eventName = (Array.isArray(evnetNames[i]) ? evnetNames[i][0] : evnetNames[i]) as keyof HTMLElementEventMap;
      let eventContext = Array.isArray(evnetNames[i]) ? (evnetNames[i][1] as Window | Document) : el;
      let eventFn = this._eventsFunction[i] as (this: HTMLElement, ev: Event) => any;
      eventContext.addEventListener(eventName, eventFn, false);
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
      let eventName = (Array.isArray(evnetNames[i]) ? evnetNames[i][0] : evnetNames[i]) as keyof HTMLElementEventMap;
      let eventContext = Array.isArray(evnetNames[i]) ? (evnetNames[i][1] as Window | Document) : this._el;

      let eventFn = this._eventsFunction[i][i] as (this: HTMLElement, ev: Event) => any;
      eventContext.removeEventListener(eventName, eventFn, false);
    }
  }
}

export default Interaction;
