import { Tool } from "@editorjs/editorjs";

export default class CodeTool {
  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data, config, api }) {
    this.data = data;
    this.api = api;
    this.config = config || {};
    this.placeholder = this.config.placeholder || "Enter your code here";
    this.languages = [
      { value: "javascript", label: "JavaScript" },
      { value: "cpp", label: "C++" },
      { value: "java", label: "Java" },
    ];

    this.codeArea = null;
    this.languageDropdown = null;
    this.wrapper = null;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("ce-code-tool");

    this.languageDropdown = document.createElement("select");
    this.languageDropdown.classList.add("ce-code-tool__dropdown");
    this.languages.forEach((lang) => {
      const option = document.createElement("option");
      option.value = lang.value;
      option.textContent = lang.label;
      this.languageDropdown.appendChild(option);
    });

    this.codeArea = document.createElement("textarea");
    this.codeArea.classList.add("ce-code-tool__textarea");
    this.codeArea.placeholder = this.placeholder;
    this.codeArea.value = this.data.code || "";

    this.wrapper.appendChild(this.languageDropdown);
    this.wrapper.appendChild(this.codeArea);

    this.api.listeners.on(this.wrapper, "block:switch", () => {
      this.languageDropdown.style.display = "none";
    });

    this.api.listeners.on(this.wrapper, "block:focus", () => {
      this.languageDropdown.style.display = "block";
    });

    this.codeArea.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();

        const { selectionStart, selectionEnd } = this.codeArea;
        const value = this.codeArea.value;
        this.codeArea.value = `${value.substring(
          0,
          selectionStart
        )}\n${value.substring(selectionEnd)}`;
        this.codeArea.selectionStart = this.codeArea.selectionEnd =
          selectionStart + 1;
      }

      if (event.key === "Backspace" && this.codeArea.value.trim() === "") {
        event.preventDefault();
        this.api.blocks.delete();
      }
    });

    return this.wrapper;
  }

  save() {
    return {
      code: this.codeArea.value,
      language: this.languageDropdown.value,
    };
  }

  static get toolbox() {
    return {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L1 5v14l11 4 11-4V5L12 1zm0 2.937l8.987 3.218L12 10.844 3.013 7.156 12 4.937zM3.56 8.437L12 11.75l8.44-3.313L12 5.125 3.56 8.437zm0 4.563L12 16.25l8.44-3.312L12 8.875 3.56 13z"/></svg>`,
      title: "Code Tool",
    };
  }
}
