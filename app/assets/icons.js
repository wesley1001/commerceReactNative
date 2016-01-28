const icons = {
  three_line_menu: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNENjk2NjcyQkNFMjExRTU5RTIwRTAzNzI2OTVDRkM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNENjk2NjczQkNFMjExRTU5RTIwRTAzNzI2OTVDRkM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzM4OUE5OTVCQ0UyMTFFNTlFMjBFMDM3MjY5NUNGQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzM4OUE5OTZCQ0UyMTFFNTlFMjBFMDM3MjY5NUNGQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz56krY5AAAAh0lEQVR42uzWoREAIRADQK5HBCUi6PEwL1+BumHTQdYkkZnt5QQAAAAAAAAAAAAAAAAAAAAA4C/VhQIAAAAAbgB6cYBlBgEAAAAAAIBjgFW8Y/cEAQAAcAMwiwMMMwgAAAAAAAAcA4ziHacnCAAAAABmEAAAAAAAAAAAAAAAAAAAAADwZQswAJhB0YEn74rRAAAAAElFTkSuQmCC',
  three_circle_menu: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczODlBOTkzQkNFMjExRTU5RTIwRTAzNzI2OTVDRkM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjczODlBOTk0QkNFMjExRTU5RTIwRTAzNzI2OTVDRkM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzM4OUE5OTFCQ0UyMTFFNTlFMjBFMDM3MjY5NUNGQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzM4OUE5OTJCQ0UyMTFFNTlFMjBFMDM3MjY5NUNGQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6+KVziAAACJUlEQVR42uyazytEURTH3/hVUlgoQpmNstJEav4DZSFFNJMhy4k/wcZa2an5AxTKghQWtn6UYspKxDQysRCaBuXH8729qya89+5bzH3emXPq00xzT80733vvO+eebsg0TaOcrcIoc2MBWAAWgAVgAVgA/f85BQ7Bq+QATPjxPCHNhVANWAVDNuNrIA7eqK6AOYfghY2AWaoroB7cgloXvwJolp+kVkBUIXhhdaCP4hZo8ODbSFGAjAffS4oCHCsGdgZOKQrwAWaA01v3U8En0GlwW+b5/B9jT2AM7FIuhL6tCcRAj5xtsT2WwT31SpDPAiwAC8ACsAAswD+yKh//Owwi8nva41kh0AKIwFOg/8fvWyAJspQLIRG86P+12IznZN/gmuo7IOUQvLBWsEh1BYjZv1L0bQc31FZApES+JNMgyX5AukS+gREgI1Odm63LbEByCyRdghPpb5pyKZyVeX7TZuajOmffj0Ko2Nrk296Uez7nx0NwS4yPwywAC8ACsABlbH61xERPYLzo1HcClsCd/mMX6gDNJEDB/G15ENP9PLoLoUGw4XIMHgA7FCvBSnBhWJ0hJzsHXYZ1V4DUS7BXIXhhnaCbYhbo8OAbpijAowffB4oCiLvBzwp+4vrMEUUBRGALCn7zikIFsh9QbVh3gYZtxldAArxTLYXFLfBRMAn2Deuq/AvYk5VhXGfwfqwAPgyxACwAC8ACsAAswP+xLwEGAIutQoweWwi0AAAAAElFTkSuQmCC',
  bell: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNENjk2Njc2QkNFMjExRTU5RTIwRTAzNzI2OTVDRkM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNENjk2Njc3QkNFMjExRTU5RTIwRTAzNzI2OTVDRkM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Q2OTY2NzRCQ0UyMTFFNTlFMjBFMDM3MjY5NUNGQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Q2OTY2NzVCQ0UyMTFFNTlFMjBFMDM3MjY5NUNGQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5z2vcUAAACnUlEQVR42uyazUuUURSH7+RYjppSIm7yo0WOXyApKkEFJqHtJKJEN7WLQP8KQXSnm3btXIigIgiKYYguJG1ThJRiLlwZtdEK8+Ptd5jrRoZs5n3vPad37g8ekMFx3nk499wvI57nqUxOxAlwApwAJ8AJcAIyNxeYPjcfvAJ7Gvr5ciZVwCjoPvPaGOjKBAERsA9yz7x+CHLASRgFVIDHoB00/aXcScw7MKcrYsv4k5EAg9SBSXDspZ4TMA3qTT6jqT+cBfrBoec/R2AARE08q4khEAMToCPgvzsPOsFPyT0gC8zosW4ir8EDcCS1Bwx65jMkdQhQd1+xsLiiabIFrEkbAgug1dL0TUPhviQBDXr+tpl68F7KXuApw3L6maQK+KJXezazCW5IEHDdypI1eUrBDvcQuMm4nW+Q0APijALiEgSUMgq4JkFAEaOAqxIExBgFxCQIuMQoIEeCgGxGAdkSBEQZBUQlCMhjFJAnQUABowDfnx3EUvg7uMIkYBeUcAqgLvyLsQLo4S8qH0dkfodAheINXbKUcfaAuOJPFaeARgECGjkF3BYg4A5XEywEX5lXgpQDUKwS1+xWK6BLwJc/3Ys8sV0BJO6j3wYUYNZBnUrjaj3dCngu6MtTqvUzWamAGvCWeQ+QLD9U4nZq3aQAOv5aAuVKZrb1rLBjQkAlmFWJY3DJoTsKupr/HKSAe2BcBXAGZym0QXsE3gQh4AUYZj74SCe0QeoDL01vh//rOAGWBNCu8VaK71nVi61QCLgLFlN8D3XyubAIoIOLD6D2H39/Q6/ujsPUA5p1FZx3mfEbtIHlMDZB+h+iMb19TZZvoMdG6XPOAnSC3Ase6uZIw+MTmAIjWoKbBp0AJ8AJcAKcACfACTCePwIMAJuwSRQ1ERAyAAAAAElFTkSuQmCC',

};

export default icons;