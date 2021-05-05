export default new class Listeners {
  constructor() {
    this.onGeometryChangeCallback = null;
    this.onCreateCallback = null;
    this.onScaleCallback = null;

    document.querySelector('select#geometry').addEventListener('change', (e) => {
      if (!this.onGeometryChangeCallback) {
        return;
      }

      this.onGeometryChangeCallback(e.target.value);
    });

    document.querySelector('button.create').addEventListener('click', () => {
      if (!this.onCreateCallback) {
        return;
      }

      this.onCreateCallback();
    });

    document.querySelector('input#scale').addEventListener('click', (e) => {
      if (!this.onScaleCallback) {
        return;
      }

      this.onScaleCallback(+e.target.value);
    });
  }

  onGeometryChange(callback) {
    this.onGeometryChangeCallback = callback; 
  }

  onCreate(callback) {
    this.onCreateCallback = callback; 
  }
  
  onScale(callback) {
    this.onScaleCallback = callback;
  }
}