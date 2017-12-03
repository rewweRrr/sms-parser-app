export class PageUtils {

  static scrollTop(value: number): void {
    let scrollingElement = document.scrollingElement || document.documentElement;
    scrollingElement.scrollTop = value;
  }

  static getScrollTop(): number {
    let scrollingElement = document.scrollingElement || document.documentElement;
    return scrollingElement.scrollTop;
  }
}
