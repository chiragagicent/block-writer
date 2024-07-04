import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import ImageTool from "./ImageTool";
import CodeTool from "./CodeTool";
const editor = new EditorJS({
  holderId: "editorjs",
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"],
    },
    list: {
      class: List,
      inlineToolbar: ["link", "bold"],
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        youtube: true,
      },
    },
    code: CodeTool,
    delimiter: Delimiter,
    ImageToolool: ImageTool,
  },
  autofocus: true,
  placeholder: "Let`s write an awesome blog!",
  data: {},
});

let saveBtn = document.querySelector("button");

saveBtn.addEventListener("click", () => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data", outputData);
    })
    .catch((error) => {
      console.log("Saving failed:", error);
    });
});
