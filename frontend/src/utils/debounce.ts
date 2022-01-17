let timer: null | ReturnType<typeof setTimeout>;

const debounce = (callback: any, limit: number) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(function () {
    callback();
  }, limit);
};

export { debounce };