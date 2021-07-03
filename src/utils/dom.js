const scrollTo = (container, elementPosition, duration, offset = 0)  => {
  if (duration <= 0) return;
  let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  let difference = (elementPosition + offset) - top;
  let perTick = difference / duration * 2;
  setTimeout(function() {
    window.scrollTo(0, top + perTick);
    scrollTo(container, elementPosition, duration - 2, offset);
  }, 10);
};



export {
  scrollTo
}
