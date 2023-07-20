export default {
  mounted(el, binding) {
    // el - ссылка на dom елемент
    // binding.value - переданное значение из компонента

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        binding.value(); // вызов переданного loadMorePosts
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },

  name: "intersection",
};
