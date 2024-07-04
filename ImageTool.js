/* class ImageTool {
  constructor({ data, api, config }) {
    this.api = api;
    this.config = config;
    this.data = data || {};
    this.wrapper = null;

    this.triggerFileInput();
  }

  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-11-1H5l3.5-4.5 2.5 3.01L17.5 9l3.5 5h-11zm-1-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>',
    };
  }

  render() {
    this.wrapper = document.createElement("div");

    if (this.data.url) {
      const img = document.createElement("img");
      img.src = this.data.url;
      img.style.maxWidth = "100%"; // Ensure image fits container width
      img.style.height = "auto"; // Maintain aspect ratio
      this.wrapper.appendChild(img);
    }

    return this.wrapper;
  }

  triggerFileInput() {
    this.input = document.createElement("input");
    this.input.type = "file";
    this.input.accept = "image/*";
    this.input.style.display = "none";
    this.input.addEventListener("change", (event) => this.uploadImage(event));

    document.body.appendChild(this.input);
    this.input.click();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.data.url = e.target.result;
        this.updateView();
        this.focusCaptionInput(); // Focus on caption input after image is uploaded
      };
      reader.readAsDataURL(file);
    }
  }

  updateView() {
    if (!this.wrapper) {
      this.wrapper = document.createElement("div");
    }
    this.wrapper.innerHTML = "";

    // Create image element
    if (this.data.url) {
      const img = document.createElement("img");
      img.src = this.data.url;
      img.style.maxWidth = "100%"; // Ensure image fits container width
      img.style.height = "auto"; // Maintain aspect ratio
      this.wrapper.appendChild(img);

      // Create caption wrapper
      const captionWrapper = document.createElement("div");
      captionWrapper.classList.add("caption-wrapper");

      // Create caption input element
      const captionInput = document.createElement("input");
      captionInput.type = "text";
      captionInput.placeholder = "Enter caption";
      captionInput.value = this.data.caption || "";
      captionInput.addEventListener("input", () => {
        this.data.caption = captionInput.value;
      });
      captionInput.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && captionInput.value.trim() === "") {
          this.api.blocks.delete();
        }
      });

      // Append caption input to caption wrapper
      captionWrapper.appendChild(captionInput);

      // Append caption wrapper to main wrapper
      this.wrapper.appendChild(captionWrapper);

      // Focus on caption input
      captionInput.focus();
    }
  }

  save(blockContent) {
    return {
      url: this.data.url,
      caption: this.data.caption,
    };
  }

  validate(savedData) {
    return !!savedData.url;
  }

  static get pasteConfig() {
    return {
      tags: ["img"],
    };
  }

  static get sanitize() {
    return {
      url: {},
      caption: {},
    };
  }
}

export default ImageTool;

 */
// adds caption after imag
class ImageTool {
  constructor({ data, api, config }) {
    this.api = api;
    this.config = config;
    this.data = data || {};
    this.wrapper = null;

    this.triggerFileInput();
  }

  static get toolbox() {
    return {
      title: "Image",
      icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-11-1H5l3.5-4.5 2.5 3.01L17.5 9l3.5 5h-11zm-1-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>',
    };
  }

  render() {
    this.wrapper = document.createElement("div");

    if (this.data.url) {
      const img = document.createElement("img");
      img.src = this.data.url;
      img.style.maxWidth = "100%"; // Ensure image fits container width
      img.style.height = "auto"; // Maintain aspect ratio
      this.wrapper.appendChild(img);
    }

    return this.wrapper;
  }

  triggerFileInput() {
    this.input = document.createElement("input");
    this.input.type = "file";
    this.input.accept = "image/*";
    this.input.style.display = "none";
    this.input.addEventListener("change", (event) => this.uploadImage(event));

    document.body.appendChild(this.input);
    this.input.click();
  }

  uploadImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.data.url = e.target.result;
        this.updateView();
        this.focusCaptionInput(); // Focus on caption input after image is uploaded
      };
      reader.readAsDataURL(file);
    }
  }

  updateView() {
    if (!this.wrapper) {
      this.wrapper = document.createElement("div");
    }
    this.wrapper.innerHTML = "";

    // Create image element
    if (this.data.url) {
      const img = document.createElement("img");
      img.src = this.data.url;
      img.style.maxWidth = "100%"; // Ensure image fits container width
      img.style.height = "auto"; // Maintain aspect ratio
      this.wrapper.appendChild(img);

      // Create caption wrapper
      const captionWrapper = document.createElement("div");
      captionWrapper.classList.add("caption-wrapper");

      // Create caption input element
      const captionInput = document.createElement("input");
      captionInput.type = "text";
      captionInput.placeholder = "Enter caption";
      captionInput.value = this.data.caption || "";
      captionInput.addEventListener("input", () => {
        this.data.caption = captionInput.value;
      });
      captionInput.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && captionInput.value.trim() === "") {
          event.preventDefault(); // Prevent default backspace behavior
          this.api.blocks.delete();
        }
      });

      // Append caption input to caption wrapper
      captionWrapper.appendChild(captionInput);

      // Append caption wrapper to main wrapper
      this.wrapper.appendChild(captionWrapper);

      // Focus on caption input
      captionInput.focus();
    }
  }

  save(blockContent) {
    return {
      url: this.data.url,
      caption: this.data.caption,
    };
  }

  validate(savedData) {
    return !!savedData.url;
  }

  static get pasteConfig() {
    return {
      tags: ["img"],
    };
  }

  static get sanitize() {
    return {
      url: {},
      caption: {},
    };
  }
}

export default ImageTool;
