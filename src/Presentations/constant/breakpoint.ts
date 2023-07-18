export const BREAK_POINT = [576, 768, 992, 1200, 1440];
// mobile first
export const mq = BREAK_POINT.map(
  (bp) => `@media screen and (min-width: ${bp}px)`
);
