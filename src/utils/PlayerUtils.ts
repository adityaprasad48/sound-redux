const volumeClassName = (volume:number) => {
  if (volume > 0.8) {
    return 'ion-android-volume-up';
  }
  if (volume > 0) {
    return 'ion-android-volume-down';
  }

  return '';
};

export default volumeClassName;
