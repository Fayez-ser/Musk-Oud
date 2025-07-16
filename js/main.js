  const element = document.getElementById('choices-select');
  const choices = new Choices(element, {
    placeholderValue: 'Choose the data type',
    searchPlaceholderValue: 'Search',
    removeItemButton: true
  });

    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    const youtubeLink = 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1';

    videoModal.addEventListener('show.bs.modal', function () {
      videoIframe.src = youtubeLink + "?autoplay=1";
    });

    videoModal.addEventListener('hidden.bs.modal', function () {
      videoIframe.src = " ";
    });





