const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return (/windows phone|iPad|iPhone|iPod|android|Blackberry|webOS|Android|Mobile|Lumia|PlayBook|Tablet/i.test(userAgent) || window.innerWidth <= 768);
};

export {
  isMobile
}